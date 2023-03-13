import React from "react";
import ReactDOM from "react-dom/client";
import { Iniciar } from "./pages/iniciar";
import { Home } from "./pages/home";
import "./styles/global.style.css";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Zeus } from "./pages/zeus";
import { StageOne } from "./pages/zeus/stege-one";
import { UserGlobalContext } from "./context/context";
import { StageTwo } from "./pages/zeus/stege-two";
import { StageThree } from "./pages/zeus/stege-three";
import { Final } from "./pages/zeus/final";
import { Fim } from "./pages/fim";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <UserGlobalContext>
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/inicio" element={<Iniciar/>}/>
      <Route path="/inicio/zeus" element={<Zeus/>}/>
      <Route path="/zeus/stegeone" element={<StageOne />}/>
      <Route path="/zeus/stegetwo" element={<StageTwo />}/>
      <Route path="/zeus/stegethree" element={<StageThree />}/>
      <Route path="/zeus/final" element={<Final />}/>
      <Route path="/fim" element={<Fim />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </UserGlobalContext>
);
