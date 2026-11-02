@echo off
chcp 65001 >nul
title DeSun FinFlow - Real-time Excel Sync Launcher
set "BRIDGE_SCRIPT=%~dp0Giao diện\desun-excel-bridge.ps1"
set "INDEX_HTML=%~dp0Giao diện\index.html"

:: Đăng ký tự khởi động ngầm cùng Windows để mỗi lần tắt máy mở lại đều tự chạy Bridge
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Run" /v "DeSunExcelBridge" /t REG_SZ /d "powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File \"%BRIDGE_SCRIPT%\"" /f >nul 2>&1

:: Khởi động Bridge ngầm nếu chưa chạy
powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "if (-not (Get-NetTCPConnection -LocalPort 8765 -State Listen -ErrorAction SilentlyContinue)) { Start-Process powershell.exe -ArgumentList '-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File ""%BRIDGE_SCRIPT%""' -WindowStyle Hidden }"

:: Mở giao diện DeSun
start "" "%INDEX_HTML%"
