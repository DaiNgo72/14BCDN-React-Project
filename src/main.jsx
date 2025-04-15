import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Setup react-router với data-mode
import { RouterProvider } from "react-router";
import { router } from "./router/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
