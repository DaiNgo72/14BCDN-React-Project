import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Setup react-router với data-mode
import { RouterProvider } from "react-router";
import { router } from "./router/router";

// setup redux
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
