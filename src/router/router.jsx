import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home";
// import { Login } from "../pages/login";
// import { Register } from "../pages/register";
import { lazy, Suspense } from "react";
import { BaseTemplate } from "../templates/base/base.template";

// Error: react 18: do code spliting
// - khi qua trong login thì chúng ta mới tải file js về
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));
const ProductDetail = lazy(() => import("../pages/product-detail"));
const ChangePassword = lazy(() => import("../pages/change-password"));

export const router = createBrowserRouter([
  {
    Component: BaseTemplate,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        // :id là dynamic segment
        // match: "/product-detail/1", "/product-detail/2", "/product-detail/3", "/product-detail/abcxyz"
        path: "/product-detail/:id",
        Component: ProductDetail,
      },
      {
        path: "/change-password",
        Component: ChangePassword,
      },
    ],
  },

  {
    path: "login",
    // Component: Login,
    element: (
      // Hiển thị skeleton
      <Suspense fallback={<h1>Loading....</h1>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "register",
    // Component: Register,
    element: <Register />,
  },
]);
