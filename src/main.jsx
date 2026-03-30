import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { routes } from "./routes/Routes";
import BackToTop from "./components/BackToTop/BackToTop";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
    <BackToTop />
  </React.StrictMode>,
);
