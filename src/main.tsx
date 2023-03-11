import React from "react";
import ReactDOM from "react-dom/client";
import { Iniciar } from "./pages/iniciar";
import { Home } from "./pages/home";
import "./styles/global.style.css";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Zeus } from "./pages/zeus";
import { StageOne } from "./pages/stege-one";
import { UserGlobalContext } from "./context/context";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <UserGlobalContext>
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/inicio" element={<Iniciar/>}/>
      <Route path="/inicio/zeus" element={<Zeus/>}/>
      <Route path="/zeus/stegeone" element={<StageOne />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </UserGlobalContext>
);
