import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    port: 8888,
    // Tự động mở browser lên khi chạy app
    open: true,
    // Cho phép truy cập cùng mạng LAN
    host: true,
  },
});
