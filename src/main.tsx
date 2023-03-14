import React from "react";
import ReactDOM from "react-dom/client";
import { Iniciar } from "./pages/iniciar";
import { Home } from "./pages/home";
import "./styles/global.style.css";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Zeus } from "./pages/personagens/zeus";
import { StageOne } from "./pages/personagens/zeus/stege-one";
import { StageTwo } from "./pages/personagens/zeus/stege-two";
import { StageThree } from "./pages/personagens/zeus/stege-three";
import { Final } from "./pages/personagens/zeus/final";
import { UserGlobalContext } from "./context/context";

import { Fim } from "./pages/fim";
import { Pandora } from "./pages/personagens/pandora";
import { StageOnePandora } from "./pages/personagens/pandora/stege-one";
import { StageTwoPandora } from "./pages/personagens/pandora/stege-two";
import { StageThreePandora } from "./pages/personagens/pandora/stege-three";
import { FinalPandora } from "./pages/personagens/pandora/final";
import { Epimeteu } from "./pages/personagens/epimeteu";
import { StageOneEpimeteu } from "./pages/personagens/epimeteu/stege-one";
import { StageTwoEpimeteu } from "./pages/personagens/epimeteu/stege-two";
import { StageThreeEpimeteu } from "./pages/personagens/epimeteu/stege-three";
import { FinalEpimeteu } from "./pages/personagens/epimeteu/final";

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

      <Route path="/inicio/pandora" element={<Pandora/>}/>
      <Route path="/pandora/stegeone" element={<StageOnePandora />}/>
      <Route path="/pandora/stegetwo" element={<StageTwoPandora />}/>
      <Route path="/pandora/stegethree" element={<StageThreePandora />}/>
      <Route path="/pandora/final" element={<FinalPandora />}/>

      <Route path="/inicio/epimeteu" element={<Epimeteu/>}/>
      <Route path="/epimeteu/stegeone" element={<StageOneEpimeteu />}/>
      <Route path="/epimeteu/stegetwo" element={<StageTwoEpimeteu />}/>
      <Route path="/epimeteu/stegethree" element={<StageThreeEpimeteu />}/>
      <Route path="/epimeteu/final" element={<FinalEpimeteu />}/>
      <Route path="/fim" element={<Fim />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </UserGlobalContext>
);
