# React Project

## Todo

- Khởi tạo git ✅
- Format code: thống nhất một dạng format ✅
- Deploy lên server ✅
- Tổ chức thư mục ✅
- Library cần dùng trong dự án

### Khởi tạo git
>
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

- react-router ✅
- tailwindcss ✅
- redux ✅
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


## Buổi 2

1. Setup font chữ

- cài đặt: npm i @fontsource/inter
- thêm font vào project: `https://www.npmjs.com/package/@fontsource/inter`

2. Tạo component Icon cho dự án

- vì sao lại đưa file image vào trong icons không để ở pulic? 
- vì sao không icon thường sử dụng định dạng svg không phải png?
svg: vector -> khi các zoom +/- thì browser nó sẽ tính toán lại vector đó để show lên giao diện. Không bị vỡ nét
png: vỡ nét


### React `memo`

- chỉ sử dụng với icon
- hoặc khi component nào mà các bạn thấy gây ảnh hưởng đến performance

### Người mới

1. Mục tiêu
- thành thục một thư viện

2. Sử dụng nhiều thư viện để so sánh sự khác nhau


## Buoi 3:
- flow 1: đăng ký xong thì điều hướng người dùng sang đăng nhập luôn
- flow 2: đăng ký xong thì tự login vào luôn

## Lazy load
## Code spliting

- chỉ download những file cần thiết, chắc chắn người sẽ vào.

## Suspense
- Suspense là một component trong React cho phép bạn "đợi" cho một số phần của giao diện người dùng được tải trước khi hiển thị chúng.

## Trong qúa trình xử lý conflict thì các bạn chọn nhầm code, khôi phục cái trước đó lại

## Huỷ quá trình xử lý conflict. sẽ làm lại từ đầu

```bash
git merge --abort
```

```bash
git merge --continue
```

## AccessToken
- chuỗi string tượng trưng cho username + password

## Hiển thị lại thông tin của user - Khôi phục lại trạng thái login lúc đó của người dùng
- Khi vừa vào trang web
1. Kiểm tra localStorage có token hay chưa
2. Gọi api để lấy thông tin của người dùng
3. Đẩy thông tin của user lên redux

## Khi code component
- Hãy để người dùng quyết định kích thước width của component chúng ta.

Những thuộc tính không nên xét cứng bên trong component:
- width
- margin

- Xây dựng props dựa trên UI ✅
- Không xây dựng props dựa trên API trả về ❌


## Vấn đề
- Home -> /product-detail/1 (Mount)
-> call api lấy thông tin của product

- /product-detail/1 -> /product-detail/2
- ProductDetail -> ProductDetail (Không còn mount lại)
-> Không gọi api nữa

## Bugs
- scrollTop không về đầu trang

## Order
- Lưu tại redux: cập nhật lại giao diện khi có sự thay đổi về state
- Lưu tại localStorage: không bị mất khi refresh lại trang