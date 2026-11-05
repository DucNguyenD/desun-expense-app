# DeSun frontend

React 19 + TypeScript + Vite 6, sử dụng CSS thuần.

## Chạy dự án

Chạy trong thư mục `apps/web`:

```sh
npm install
npm run dev
npm test
npm run build
```

## Cấu trúc mã nguồn

```text
src/
  main.tsx                 Khởi động React, nạp CSS nền tảng
  app/                     Component gốc và bố cục ứng dụng
  components/              Icon, logo, header, footer dùng chung
  features/
    auth/                  Form đăng nhập/đăng ký và CSS riêng
    landing/               Trang giới thiệu, câu chuyện, nhân vật
    theme/                 Chọn màu và lưu lựa chọn theme
  styles/
    tokens.css             Biến màu và font
    fonts.css              Font Be Vietnam Pro và Lora đóng gói trong public/fonts
    global.css             Reset và quy tắc nền tảng
```

- `LandingPage.tsx` ghép câu chuyện, form tài khoản và bộ chọn theme.
- Trong `landing`, `story.data.ts` chứa nội dung; `palette.ts` tính màu theo hành trình; `Walker.tsx` vẽ nhân vật; `journey.ts` tính địa hình, điểm đặt chân và khớp gối.
- Test chuyển động nằm cạnh `journey.ts`; lệnh `npm test` trỏ tới file này.
- Code và CSS chỉ phục vụ một tính năng nằm trong folder tính năng đó. Thành phần dùng chung mới đưa vào `components`.
- Các tính năng ví, giao dịch, ngân sách sẽ có folder riêng khi được triển khai.
- Logo dùng trực tiếp `/desun-logo.jpeg` trong `public`. `BrandLogo` giới hạn vùng hiển thị quanh biểu tượng, không thay đổi file gốc.
- Font được tải từ `google/fonts`, có giấy phép OFL đi kèm trong `public/fonts`. Dùng font đã khai báo trong `fonts.css`, bao gồm Lora Italic cho tiếng Việt, để hiển thị nhất quán giữa các máy.

Form tài khoản hiện là bản thử giao diện, chưa kết nối Django.
