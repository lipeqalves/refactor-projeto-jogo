import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./templates/home";
import "./styles/global.style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
