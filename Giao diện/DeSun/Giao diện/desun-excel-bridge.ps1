# =============================================================================
# DeSun Real-time Excel Bridge Server (http://127.0.0.1:8765)
# Tự động đồng bộ 2 chiều thời gian thực giữa Giao diện DeSun và DeSun_DuLieu_ThuChi.xlsx
# Tự động cập nhật ngay cả khi file DeSun_DuLieu_ThuChi.xlsx đang mở trên Microsoft Excel
# =============================================================================
param(
  [int]$Port = 8765
)

$ErrorActionPreference = 'Continue'
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ExcelPath = Join-Path $ScriptDir 'DeSun_DuLieu_ThuChi.xlsx'

$Listener = $null
$PrefixConfigs = @(
  @("http://127.0.0.1:$Port/", "http://localhost:$Port/"),
  @("http://localhost:$Port/"),
  @("http://127.0.0.1:$Port/")
)

foreach ($Prefixes in $PrefixConfigs) {
  try {
    $Candidate = New-Object System.Net.HttpListener
    foreach ($P in $Prefixes) {
      $Candidate.Prefixes.Add($P)
    }
    $Candidate.Start()
    $Listener = $Candidate
    break
  } catch {
    try { $Candidate.Close() } catch {}
  }
}

if ($null -eq $Listener -or -not $Listener.IsListening) {
  exit 0
}

$script:PendingBytes = $null
$script:LastSavedAt = (Get-Date).ToString('HH:mm:ss')

function Get-FileMtimeMs([string]$FilePath) {
  if (Test-Path -LiteralPath $FilePath) {
    $fi = Get-Item -LiteralPath $FilePath
    return [int64](($fi.LastWriteTimeUtc - [datetime]'1970-01-01T00:00:00Z').TotalMilliseconds)
  }
  return 0
}

function Write-ExcelWithLiveRefresh([string]$TargetFile, [byte[]]$BytesToWrite) {
  # 1. Thử ghi trực tiếp xuống ổ đĩa (Nhanh 2ms khi file không bị khóa bởi Excel)
  try {
    [System.IO.File]::WriteAllBytes($TargetFile, $BytesToWrite)
    return $true
  } catch {
    # 2. Nếu file đang được mở trong Microsoft Excel -> Tự động đóng tạm & mở lại qua Excel COM để cập nhật trực tiếp trên màn hình Excel
    try {
      $excelApp = [Runtime.InteropServices.Marshal]::GetActiveObject('Excel.Application')
      if ($null -ne $excelApp) {
        $targetName = [System.IO.Path]::GetFileName($TargetFile)
        $matchedWb = $null
        $activeSheetName = $null
        foreach ($wb in $excelApp.Workbooks) {
          if ($wb.Name -ieq $targetName -or $wb.FullName -ieq $TargetFile) {
            $matchedWb = $wb
            try { $activeSheetName = $wb.ActiveSheet.Name } catch {}
            break
          }
        }
        if ($null -ne $matchedWb) {
          $excelApp.DisplayAlerts = $false
          $matchedWb.Close($false)
          Start-Sleep -Milliseconds 120
          [System.IO.File]::WriteAllBytes($TargetFile, $BytesToWrite)
          $reopenedWb = $excelApp.Workbooks.Open($TargetFile)
          if ($activeSheetName) {
            try { $reopenedWb.Sheets.Item($activeSheetName).Activate() } catch {}
          }
          $excelApp.DisplayAlerts = $true
          return $true
        }
      }
    } catch {}
    return $false
  }
}

function Try-FlushPendingWrite {
  if ($null -ne $script:PendingBytes) {
    if (Write-ExcelWithLiveRefresh $ExcelPath $script:PendingBytes) {
      $script:PendingBytes = $null
      $script:LastSavedAt = (Get-Date).ToString('HH:mm:ss')
      return $true
    }
    return $false
  }
  return $true
}

function Read-ExcelBytesShared([string]$FilePath) {
  if ($null -ne $script:PendingBytes) {
    return $script:PendingBytes
  }
  $fs = New-Object System.IO.FileStream($FilePath, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite)
  try {
    $ms = New-Object System.IO.MemoryStream
    $fs.CopyTo($ms)
    $bytes = $ms.ToArray()
    $ms.Close()
    return $bytes
  } finally {
    $fs.Close()
  }
}

function Add-CorsHeaders($Response) {
  $Response.Headers.Add('Access-Control-Allow-Origin', '*')
  $Response.Headers.Add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  $Response.Headers.Add('Access-Control-Allow-Headers', 'Content-Type, Cache-Control, X-Requested-With')
  $Response.Headers.Add('Cache-Control', 'no-store, no-cache, must-revalidate')
}

function Send-JsonResponse($Response, [int]$StatusCode, [string]$JsonBody) {
  $Response.StatusCode = $StatusCode
  $Response.ContentType = 'application/json; charset=utf-8'
  Add-CorsHeaders $Response
  $Bytes = [System.Text.Encoding]::UTF8.GetBytes($JsonBody)
  $Response.ContentLength64 = $Bytes.Length
  $Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
  $Response.OutputStream.Close()
}

function Send-BinaryResponse($Response, [int]$StatusCode, [byte[]]$Bytes) {
  $Response.StatusCode = $StatusCode
  $Response.ContentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  Add-CorsHeaders $Response
  $Response.ContentLength64 = $Bytes.Length
  $Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
  $Response.OutputStream.Close()
}

while ($Listener.IsListening) {
  try {
    $Context = $Listener.GetContext()
    $Request = $Context.Request
    $Response = $Context.Response
    $Path = $Request.Url.AbsolutePath

    if ($Request.HttpMethod -eq 'OPTIONS') {
      Send-JsonResponse $Response 200 '{"ok":true}'
      continue
    }

    # 1. Endpoint kiểm tra trạng thái & tự động xả hàng đợi
    if ($Path -eq '/api/excel-status' -and $Request.HttpMethod -eq 'GET') {
      Try-FlushPendingWrite | Out-Null
      $MtimeMs = Get-FileMtimeMs $ExcelPath
      $IsPending = if ($null -ne $script:PendingBytes) { 'true' } else { 'false' }
      $Json = "{`"ok`":true,`"fileName`":`"DeSun_DuLieu_ThuChi.xlsx`",`"mtimeMs`":$MtimeMs,`"pendingWrite`":$IsPending,`"lastSavedAt`":`"$($script:LastSavedAt)`"}"
      Send-JsonResponse $Response 200 $Json
      continue
    }

    # 2. Endpoint tải dữ liệu thực tế từ file DeSun_DuLieu_ThuChi.xlsx (GET /api/excel-sync)
    if (($Path -eq '/api/excel-sync' -or $Path -eq '/api/excel') -and $Request.HttpMethod -eq 'GET') {
      Try-FlushPendingWrite | Out-Null
      if (Test-Path -LiteralPath $ExcelPath) {
        $FileBytes = Read-ExcelBytesShared $ExcelPath
        Send-BinaryResponse $Response 200 $FileBytes
      } else {
        Send-JsonResponse $Response 404 '{"ok":false,"error":"File not found"}'
      }
      continue
    }

    # 3. Endpoint ghi trực tiếp Workbook xuống file DeSun_DuLieu_ThuChi.xlsx (POST /api/excel-sync)
    if (($Path -eq '/api/excel-sync' -or $Path -eq '/api/excel') -and $Request.HttpMethod -eq 'POST') {
      $ms = New-Object System.IO.MemoryStream
      $Request.InputStream.CopyTo($ms)
      $RawBytes = $ms.ToArray()
      $ms.Close()

      if ($RawBytes.Length -gt 0) {
        if ($RawBytes[0] -eq 123) {
          try {
            $BodyText = [System.Text.Encoding]::UTF8.GetString($RawBytes)
            $Payload = $BodyText | ConvertFrom-Json
            if ($Payload -and $Payload.base64) {
              $RawBytes = [System.Convert]::FromBase64String([string]$Payload.base64)
            }
          } catch {}
        }

        if (Write-ExcelWithLiveRefresh $ExcelPath $RawBytes) {
          $script:PendingBytes = $null
          $script:LastSavedAt = (Get-Date).ToString('HH:mm:ss')
          $MtimeMs = Get-FileMtimeMs $ExcelPath
          $Json = "{`"ok`":true,`"queued`":false,`"fileName`":`"DeSun_DuLieu_ThuChi.xlsx`",`"savedAt`":`"$($script:LastSavedAt)`",`"mtimeMs`":$MtimeMs}"
          Send-JsonResponse $Response 200 $Json
        } else {
          $script:PendingBytes = $RawBytes
          $script:LastSavedAt = (Get-Date).ToString('HH:mm:ss')
          $MtimeMs = Get-FileMtimeMs $ExcelPath
          $Json = "{`"ok`":true,`"queued`":true,`"fileName`":`"DeSun_DuLieu_ThuChi.xlsx`",`"savedAt`":`"$($script:LastSavedAt)`",`"mtimeMs`":$MtimeMs}"
          Send-JsonResponse $Response 200 $Json
        }
      } else {
        Send-JsonResponse $Response 400 '{"ok":false,"error":"Empty payload"}'
      }
      continue
    }

    Send-JsonResponse $Response 200 '{"ok":true,"service":"DeSun Excel Bridge"}'
  } catch {
    try {
      $Context.Response.OutputStream.Close()
    } catch {}
  }
}
