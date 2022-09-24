import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "@pages/Home";
import { Antojitos } from "@pages/Antojitos";
import { Encargados } from "@pages/Encargados";
import { Pasapalos } from "@pages/Pasapalos";


export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/antojitos" element={<Antojitos />} />
        <Route path="/pedidos-personalizados" element={<Encargados />} />
        <Route path="/pasapalos" element={<Pasapalos />} />
      </Routes>
    </BrowserRouter>
  );
};
