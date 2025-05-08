import { Outlet } from "react-router";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Category } from "./components/category";
import { ScrollRestoration } from "react-router";

export function BaseTemplate() {
  return (
    <>
      {/*
       Nhận biết khi nào route thay đổi
        - tự động scroll về đầu trang
      */}
      <ScrollRestoration nonce="unique-nonce-value" />

      <Header />
      <Category />

      <Outlet />

      <Footer />
    </>
  );
}
