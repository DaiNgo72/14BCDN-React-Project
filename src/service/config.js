import axios from "axios";
import { manageLocalStorage } from "../common/utils";
import { KEY_ACCESS_TOKEN } from "../common/constants";

const BASE_URL = "https://shop.cyberlearn.vn";

export const axiosWithAuth = axios.create({
  baseURL: BASE_URL,
  // Thời gian đợi API trả về, nếu quá thời gian này thì sẽ xem api trả về kết quả thất bại

  // 30 phút
  timeout: 60 * 30 * 1000, // ms
});

/**
 * Thêm thông tin vào cho headers trước khi gửi request đi
 */
axiosWithAuth.interceptors.request.use((config) => {
  config.headers.set(
    "Authorization",
    `Bearer ${manageLocalStorage.get(KEY_ACCESS_TOKEN)}`,
  );

  return config;
});

export const axiosWithoutAuth = axios.create({
  baseURL: BASE_URL,
  // Thời gian đợi API trả về, nếu quá thời gian này thì sẽ xem api trả về kết quả thất bại

  // 30 phút
  timeout: 60 * 30 * 1000, // ms
});

// axiosWithoutAuth("/api/user/profile")
// axios("https://shop.cyberlearn.vn/api/user/profile")
