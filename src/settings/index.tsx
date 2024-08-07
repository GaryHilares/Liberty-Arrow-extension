import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import "./globals.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
