import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <nav>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/admin/panel">Panel Admin</Link>
                </li>
                <li>
                  <Link to="/admin/cargar">Cargar Tour</Link>
                </li>
                <li>
                  <Link to="/producto/:id">Detallo Producto</Link>
                </li>
                <li>
                  <Link to="/registro"> Registro</Link>
                </li>
                <li>
                  <Link to="/login"> Login</Link>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar; 