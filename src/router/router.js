import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { SignUp } from "../pages/sign-up";

export const router = createBrowserRouter([
  {
    path: "",
    Component: Home,
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "sign-up",
    Component: SignUp,
  },
]);
