import { Outlet } from "react-router";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Category } from "./components/category";

export function BaseTemplate() {
  return (
    <>
      <Header />
      <Category />

      <Outlet />

      <Footer />
    </>
  );
}
