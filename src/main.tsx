// import from library
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "@app/store.ts";
import { GlobalStyle } from "@GlobalStyles/GlobalStyles.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "@routers/index.tsx";
import "leaflet/dist/leaflet.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
