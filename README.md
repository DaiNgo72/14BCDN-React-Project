# React Project

## Todo

- Khởi tạo git ✅
- Format code: thống nhất một dạng format ✅
- Deploy lên server ✅
- Tổ chức thư mục ✅
- Library cần dùng trong dự án

### Khởi tạo git
> git init
- tạo repo ở github và đẩy code lên

### Format code
- sử dụng thư viện prettier
```bash
npm i prettier
```
- Tạo file .prettierrc
- Lên prettier playground để lấy thông tin cấu hình cho prettier. [prettier playground](https://prettier.io/playground/)

### Deploy lên server
- câu lệnh gì để có thể cài thư viện

```bash
npm install
```

- câu lệnh gì để build được dự án

```bash
npm run build
```

### Tổ chức thư mục

1. Components
2. Templates
3. Pages
4. Router
5. Store
6. Hooks - (hiện tại thì ít sử dụng)
7. Common 
    7.1 Utils
    7.2 Helpers
    7.3 Constants
8. Services (để call api)

### Library cần dùng trong dự án

- react-router
- tailwindcss
- redux
- formik
- lucide-react (Icon)
- Library UI chưa sử dụng (...)
- axios (call api - Đỡ cực hơn khi sử dụng so với fetch)

### Lệnh để cài đặt nhiều thư viện cùng một lúc 
npm i react-router @reduxjs/toolkit react-redux tailwindcss formik zod lucide-react axios

## Kiểm tra xem thư viện nào bị out dated
```bash
npm outdated
```
```bash
npx npm-check-updates -i
# chọn thì nhấn space
# enter để tiếp tục
```
## Ý tưởng

- Chọn mode của router là `data`