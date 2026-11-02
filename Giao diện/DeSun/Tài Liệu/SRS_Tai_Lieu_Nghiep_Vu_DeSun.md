# TÀI LIỆU ĐẶC TẢ YÊU CẦU PHẦN MỀM (SRS) & QUY TRÌNH NGHIỆP VỤ — DESUN PERSONAL FINANCE (PFM)

> **Mã dự án:** `OAP-PFM-DESUN`  
> **Phiên bản:** `v3.0 Enterprise`  
> **Ngày ban hành:** `20/10/2026`  
> **Tài liệu liên quan:**  
> - Giao diện Prototype: [`DeSun/Giao diện/index.html`](../Giao%20diện/index.html)  
> - Tài liệu HTML tương tác: [`DeSun_SRS_Business_Documentation.html`](./DeSun_SRS_Business_Documentation.html)  
> - Thiết kế Cơ sở dữ liệu chuẩn OAP: [`Thiet_Ke_Co_So_Du_Lieu_DeSun.md`](./Thiet_Ke_Co_So_Du_Lieu_DeSun.md)

---

## 1. Giới Thiệu & Phạm Vi Hệ Thống (System Scope)

### 1.1. Mục đích tài liệu
Tài liệu **SRS (Software Requirements Specification) & Nghiệp vụ quy trình** này quy định chi tiết toàn bộ luồng nghiệp vụ, quy tắc xử lý giao diện (UI/UX), công thức tính toán tài chính, cấu trúc bảng biểu và cơ sở dữ liệu chuẩn OAP cho ứng dụng **Quản lý Chi tiêu Cá nhân DeSun (PFM)**.

### 1.2. Phạm vi nghiệp vụ cốt lõi
- Phục vụ **cá nhân bạn (`Nguyễn Thanh Đức`)** và **một số cá nhân khác** được cấp tài khoản trên hệ thống (không sử dụng mô hình chia bill nhóm phức tạp).
- Mỗi cá nhân sở hữu không gian dữ liệu độc lập (`PPR_ID`): Danh mục Ví riêng, Bảng kê thu chi riêng, Hạn mức ngân sách tháng riêng và Mục tiêu tiết kiệm riêng.
- Hỗ trợ vận hành đồng thời trên **Web App màn hình rộng (Desktop)** và **Giao diện Điện thoại (Mobile Responsive)**.

---

## 2. Phân Vai Người Dùng (Actors)

| Mã Actor | Tên Vai Trò | Giá trị `ROLE_TYPE` (`PFM_PROFILES`) | Quyền Hạn Nghiệp Vụ |
|---|---|---|---|
| **ACT-01** | **Chủ tài khoản chính (Cá nhân tôi)** | `OWNER` | Quản lý toàn bộ thu chi, ngân sách, mục tiêu, nguồn tiền của bản thân; được mặc định lưu sẵn trên thiết bị cá nhân. |
| **ACT-02** | **Cá nhân sử dụng độc lập** | `INDIVIDUAL` | Đăng nhập bằng Email/Mật khẩu riêng; quản lý sổ thu chi, ví, ngân sách, mục tiêu độc lập của cá nhân đó. Sau khi đăng nhập lần đầu trên thiết bị mới xuất hiện trong danh sách `<select>` chuyển đổi nhanh. |
| **ACT-03** | **Hệ thống tự động (Triggers / Engine)** | `SYSTEM` | Tự động định dạng dấu chấm phân cách số tiền (`.`), tự động đồng bộ số dư Ví (`PFM_WALLETS`), cập nhật tiến độ Ngân sách (`PFM_BUDGETS`) và Mục tiêu (`PFM_SAVINGS_GOALS`). |

---

## 3. Quy Trình Nghiệp Vụ Tổng Thể (End-to-End Business Workflows)

### 3.1. Luồng 1: Đăng nhập & Ghi nhớ Tài khoản trên Thiết bị (`PFM_PROFILES` & `PFM_USER_DEVICES`)
1. Người dùng mở ứng dụng DeSun → Hệ thống hiển thị **Trang Đăng Nhập**.
2. Hệ thống truy vấn bảng `PFM_USER_DEVICES` theo `DEVICE_TOKEN` với điều kiện `HAS_LOGGED_IN = 'Y'` để nạp vào ô chọn `<select>` **Chọn nhanh cá nhân sử dụng**.
3. **Trường hợp 1 (Chọn tài khoản đã từng đăng nhập trên thiết bị):**
   - Người dùng chọn hồ sơ trong `<select>` → Hệ thống tự điền Email và đăng nhập nhanh vào Dashboard của cá nhân đó.
4. **Trường hợp 2 (Đăng nhập tài khoản cá nhân mới lần đầu):**
   - Người dùng chọn `+ Đăng nhập tài khoản cá nhân khác (Lần đầu)...` trong `<select>`.
   - Người dùng nhập Email và Mật khẩu → Bấm **Đăng nhập vào DeSun**.
   - Hệ thống xác thực trên `PFM_PROFILES` (hoặc khởi tạo hồ sơ mới) và ghi nhận `HAS_LOGGED_IN = 'Y'` vào `PFM_USER_DEVICES`.
   - Từ thời điểm đó trở đi, tài khoản này chính thức xuất hiện trong `<select>` chuyển đổi nhanh ở cả Trang đăng nhập, Sidebar trái và Trang Cá nhân.

### 3.2. Luồng 2: Ghi nhận Khoản Thu / Khoản Chi (`PFM_TRANSACTIONS`)
1. Người dùng bấm nút **`+ Thêm giao dịch`** (hoặc `+ Thêm khoản thu` / `+ Thêm khoản chi`).
2. Hệ thống mở **Popup Thêm Giao Dịch** (thiết kế gọn 1 màn hình, không thanh cuộn dọc):
   - Chọn phân loại: **Chi tiêu (`EXPENSE`)** hoặc **Thu nhập (`INCOME`)**.
   - Nhập số tiền: Ngay khi gõ phím hoặc bấm nút chọn nhanh (`50.000`, `100.000`, `200.000`, `450.000`, `+.000`), hệ thống tự động định dạng dấu chấm phân cách hàng nghìn (`.`).
   - Chọn **Danh mục** trên lưới 4 cột (`PFM_CATEGORIES`).
   - Chọn **Ngày** và **Nguồn tiền / Ví** (`PFM_WALLETS`).
   - Nhập **Ghi chú** (nếu để trống, hệ thống tự lấy tên Danh mục làm nội dung khoản mục `TITLE`).
3. Bấm **Lưu giao dịch** → Hệ thống lưu vào `PFM_TRANSACTIONS`, đồng thời tự động cập nhật số dư `PFM_WALLETS` và chi tiêu tháng `PFM_BUDGETS`.

### 3.3. Luồng 3: Thiết lập & Tích lũy Mục tiêu Cá nhân (`PFM_SAVINGS_GOALS` & `PFM_GOAL_DEPOSITS`)
1. Tại Trang chủ hoặc tab **Mục tiêu tiết kiệm**, người dùng bấm **`+ Thêm mục tiêu`** / **`+ Thêm mục tiêu mới`**.
2. Trong **Popup Thêm Mục Tiêu Cá Nhân**, người dùng nhập:
   - **Tên mục tiêu cá nhân** (VD: *Mua iPhone 17, Du lịch Nhật Bản...*).
   - **Số tiền mục tiêu cần đạt (`TARGET_AMOUNT`)** và **Số tiền đã tích lũy hiện tại (`CURRENT_AMOUNT`)** (tự động phân cách dấu chấm `.`).
   - **Biểu tượng & Nhóm mục tiêu** (`Quỹ dự phòng`, `Du lịch`, `Công nghệ`, `Mua sắm lớn`, `Gia đình`).
3. Khi có khoản tiết kiệm mới, người dùng bấm **`+ Nạp tiền`** trên thẻ mục tiêu → Nhập số tiền nạp thêm vào Popup → Hệ thống ghi vào `PFM_GOAL_DEPOSITS` và cộng dồn `CURRENT_AMOUNT` trên `PFM_SAVINGS_GOALS`.

---

## 4. Đặc Tả Yêu Cầu Chức Năng Chi Tiết (Functional Requirements — SRS)

| Mã YC | Phân Hệ / Màn Hình | Mô Tả Yêu Cầu & Quy Tắc Nghiệp Vụ (Business Rules) | Bảng DB Chuẩn OAP |
|---|---|---|---|
| **FR-01** | **Đăng nhập & `<select>` Đa cá nhân** | - Ô `<select>` chỉ hiển thị các user có `HAS_LOGGED_IN = 'Y'` trên thiết bị.<br>- Tùy chọn cuối trong `<select>` là `+ Đăng nhập tài khoản cá nhân khác (Lần đầu)...`.<br>- Sau khi user mới đăng nhập thành công lần đầu, tự động thêm user đó vào `<select>`. | `PFM_PROFILES`<br>`PFM_USER_DEVICES` |
| **FR-02** | **Trang chủ (Dashboard Tổng quan)** | - Hiển thị thẻ **Tổng số dư** (hỗ trợ ẩn/hiện số dư `•••••• ₫`), **Thu nhập tháng này**, **Chi tiêu tháng này**.<br>- Hiển thị **Biểu đồ Donut** tỷ trọng chi tiêu theo danh mục.<br>- Hiển thị **Khoản thu chi gần đây** (5 khoản mới nhất) và **Biểu đồ cột 6 tháng gần đây**.<br>- Hiển thị **Mục tiêu tài chính cá nhân** kèm nút `+ Thêm mục tiêu`, `Sửa`, `+ Nạp tiền`. | `PFM_TRANSACTIONS`<br>`PFM_CATEGORIES`<br>`PFM_SAVINGS_GOALS` |
| **FR-03** | **Bảng Danh sách thu chi (`Danh sách thu chi`)** | - Hiển thị 3 thẻ KPI tóm tắt trên đầu trang (**Tổng khoản thu**, **Tổng khoản chi**, **Số dư hiện tại**).<br>- Bộ lọc đa chiều: Tìm kiếm từ khóa + `<select>` lọc Danh mục + Nút lọc `Tất cả / Khoản chi / Khoản thu`.<br>- Hiển thị **Bảng dữ liệu 8 cột** nằm gọn trên 1 dòng (`white-space: nowrap`), không rớt dòng Badge.<br>- Chân bảng (`tfoot`) tự động cộng tổng Thu, tổng Chi và Chênh lệch ròng của các dòng đang lọc. | `PFM_TRANSACTIONS`<br>`PFM_CATEGORIES`<br>`PFM_WALLETS` |
| **FR-04** | **Popup Thêm Giao Dịch (1-Screen Modal)** | - Thiết kế gọn trên 1 màn hình, không xuất hiện thanh cuộn dọc.<br>- Tự động thêm dấu chấm (`.`) phân cách hàng nghìn khi nhập số tiền.<br>- Không bị đóng nhầm khi bôi đen văn bản và kéo chuột ra ngoài vùng Popup.<br>- Hỗ trợ nhấn phím `ESC` để đóng nhanh Popup. | `PFM_TRANSACTIONS`<br>`PFM_CATEGORIES`<br>`PFM_WALLETS` |
| **FR-05** | **Ngân sách & Mục tiêu cá nhân** | - **Tab Ngân sách**: Hiển thị số tiền đã chi / hạn mức tháng và thanh tiến trình `%`; cho phép bấm **`Sửa hạn mức`**.<br>- **Tab Mục tiêu**: Hiển thị danh sách mục tiêu, số tiền còn thiếu để đạt 100%, hỗ trợ **`+ Thêm mục tiêu mới`**, **`+ Nạp tiền`**, **`Sửa`**, **`Xóa`**. | `PFM_BUDGETS`<br>`PFM_SAVINGS_GOALS`<br>`PFM_GOAL_DEPOSITS` |
| **FR-06** | **Cá nhân & Nguồn tiền** | - Hiển thị thông tin hồ sơ đang sử dụng, bộ chọn `<select>` chuyển đổi nhanh giữa các tài khoản đã đăng nhập trên thiết bị.<br>- Hiển thị danh sách Ví & Nguồn tiền cá nhân (`Techcombank Chính`, `Ví MoMo`, `Tiền mặt cá nhân`). | `PFM_PROFILES`<br>`PFM_USER_DEVICES`<br>`PFM_WALLETS` |

---

## 5. Công Thức Tính Toán Nghiệp Vụ (Business Formulas)

1. **Tổng thu nhập (`TOTAL_INCOME`):**
   $$\text{TOTAL\_INCOME} = \sum (\text{AMOUNT}) \quad \text{với } \text{TX\_TYPE} = \text{'INCOME'} \text{ và } \text{STATUS} = \text{'Y'}$$
2. **Tổng chi tiêu (`TOTAL_EXPENSE`):**
   $$\text{TOTAL\_EXPENSE} = \sum (\text{AMOUNT}) \quad \text{với } \text{TX\_TYPE} = \text{'EXPENSE'} \text{ và } \text{STATUS} = \text{'Y'}$$
3. **Số dư ròng hiện tại (`CURRENT_BALANCE`):**
   $$\text{CURRENT\_BALANCE} = \text{TOTAL\_INCOME} - \text{TOTAL\_EXPENSE}$$
4. **Tỷ trọng danh mục trên Biểu đồ Donut (`CATEGORY_PCT`):**
   $$\text{CATEGORY\_PCT} = \text{ROUND}\left(\frac{\text{CATEGORY\_EXPENSE}}{\text{TOTAL\_EXPENSE}} \times 100\right)$$
5. **Tỷ lệ sử dụng Ngân sách tháng (`BUDGET_PCT`):**
   $$\text{BUDGET\_PCT} = \min\left(100, \text{ROUND}\left(\frac{\text{SPENT\_AMOUNT}}{\text{LIMIT\_AMOUNT}} \times 100\right)\right)$$
6. **Tiến độ hoàn thành Mục tiêu cá nhân (`GOAL_PCT`) & Số tiền còn thiếu (`REMAINING_AMOUNT`):**
   $$\text{GOAL\_PCT} = \min\left(100, \text{ROUND}\left(\frac{\text{CURRENT\_AMOUNT}}{\text{TARGET\_AMOUNT}} \times 100\right)\right)$$
   $$\text{REMAINING\_AMOUNT} = \max\left(0, \text{TARGET\_AMOUNT} - \text{CURRENT\_AMOUNT}\right)$$
