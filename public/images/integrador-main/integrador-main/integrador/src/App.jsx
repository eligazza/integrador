import { BrowserRouter, Routes ,Route } from "react-router-dom"
import { useState } from "react";
import Home from "./Routes/Home/Home";
import CargarTour from "./Routes/CargarTour/CargarTour";
import PanelAdmin from "./Routes/PanelAdmin/PanelAdmin";
import DetalleProducto from "./Routes/DetalleProducto/DetalleProducto";
import CrearCuenta from "./Routes/CrearCuenta/CrearCuenta";
import Login from "./Routes/Login/Login";

function App() {



  return (
      <div className="App">       
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="admin/panel" element={<PanelAdmin/>}/>
            <Route path="admin/cargar" element={<CargarTour/>}/>            
            <Route path="producto/id" element={<DetalleProducto/>}/>
            <Route path="registro" element={<CrearCuenta/>}/>  
            <Route path="login" element={<Login/>}/> 
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;