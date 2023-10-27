import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
//import './App.css'
import { BrowserRouter, Routes ,Route } from "react-router-dom"
import Home from "./Routes/Home/Home";
import CargarTour from "./Routes/CargarTour/CargarTour";
import PanelAdmin from "./Routes/PanelAdmin/PanelAdmin";
import DetalleProducto from "./Routes/DetalleProducto/DetalleProducto";
import CrearCuenta from "./Routes/CrearCuenta/CrearCuenta";
import Login from "./Routes/Login/Login";

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin/panel" element={<PanelAdmin />} />
        <Route path="admin/cargar" element={<CargarTour />} />
        <Route path="producto/:id" element={<DetalleProducto />} />
        <Route path="registro" element={<CrearCuenta />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    

  )
}

export default App
