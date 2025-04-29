import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Link vào global style
import "@fontsource/inter";

// Setup react-router với data-mode
import { RouterProvider } from "react-router";
import { router } from "./router/router";

// setup redux
import { Provider } from "react-redux";
import { store } from "./store/store";

// Init
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <RouterProvider router={router} />
      </App>
    </Provider>
  </React.StrictMode>,
);
