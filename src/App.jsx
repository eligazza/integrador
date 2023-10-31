import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { useAuth } from "./Context/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Routes/Home/Home";
import CargarTour from "./Routes/CargarTour/CargarTour";
import PanelAdmin from "./Routes/PanelAdmin/PanelAdmin";
import DetalleProducto from "./Routes/DetalleProducto/DetalleProducto";
import CrearCuenta from "./Routes/CrearCuenta/CrearCuenta";
import Login from "./Routes/Login/Login";
import Forbidden from "./Routes/Forbidden/Forbidden";
import Perfil from "./Routes/Perfil/perfil";

function App() {
  const { currentUser, logout } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin/panel" element={<PanelAdmin />} />
        <Route
          path="admin/cargar"
          element={
            currentUser?.role == "admin" ? <CargarTour /> : <Forbidden />
          }
        />
        <Route path="producto/id" element={<DetalleProducto />} />
        <Route path="registro" element={<CrearCuenta />} />
        <Route path="login" element={<Login />} />
        <Route path="perfil" element={ currentUser ?  <Perfil /> : <Navigate to="/login"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
