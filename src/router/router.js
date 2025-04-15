import { createBrowserRouter } from "react-router";
import { Home } from '../pages/home'
import { Login } from '../pages/login'

export const router = createBrowserRouter([
  {
    path: "",
    Component: Home,
  },
  {
    path: "login",
    Component: Login,
  }
]);
