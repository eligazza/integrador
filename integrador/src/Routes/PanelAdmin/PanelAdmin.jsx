import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
const PanelAdmin = () => {
  return (
    <div>
        <Header/>
        <h1>Panel Admin</h1>
        <button>Crear Tour</button>
        <button>Listar Tour</button>
        <button>Eliminar Tour</button>
        <Footer/>
    </div>
  )
}

export default PanelAdmin