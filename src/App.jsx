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
import AgregarCategoria from "./Routes/Admin/AgregarCategoria";
import EditarTour from "./Routes/Admin/EditarTour";
import EditarUsuario from "./Routes/Admin/EditarUsuario";
import MostrarTours from "./Routes/Admin/MostrarTours";
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
        <Route path="producto/:id" element={<DetalleProducto />} />
        <Route path="registro" element={<CrearCuenta />} />
        <Route path="login" element={<Login />} />
        <Route path="admin/agregarcategoria" element={currentUser?.role == "admin" ? <AgregarCategoria /> : <Forbidden />} />
        <Route path="admin/editarusuario" element={currentUser?.role == "admin" ? <EditarUsuario /> : <Forbidden />} />
        <Route path="admin/editar/:id" element={currentUser?.role == "admin" ? <EditarTour /> : <Forbidden />} />
        <Route path="admin/editar" element={currentUser?.role == "admin" ? <MostrarTours /> : <Forbidden />} />
        <Route path="perfil" element={ currentUser ?  <Perfil /> : <Navigate to="/login"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
