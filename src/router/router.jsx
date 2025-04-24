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

export const router = createBrowserRouter([
  {
    Component: BaseTemplate,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/card-detail",
        element: <h1>Card Detail Page</h1>,
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
