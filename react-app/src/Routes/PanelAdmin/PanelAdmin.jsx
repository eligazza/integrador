import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link de React Router
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import MostrarTour from './MostrarTour';
const PanelAdmin = () => {
  return (
    <div>
      <Header />
      <h1>Panel Admin</h1>
      <Link to="/admin/cargar"> {/* Usa el componente Link para navegar a la ruta deseada */}
        <button>Crear Tour</button>
      </Link>
      <MostrarTour />
      <button>Eliminar Tour</button>
      <Footer />
    </div>
  );
}

export default PanelAdmin;