import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import event from "../../Components/Card/Card"


const DetalleProducto = (props) => {


  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  };




  return (
    <div>
        <Header/>
        <h1>Detalle Producto</h1>
        <h3>ID {props.id}</h3>
        <h3>Title:{props.title}</h3>
        <h3>Price: {props.price}</h3>

        <div>
            <button onClick={goBack}>Go back</button>
         </div>
        <Footer/>
    </div>
  )
}

export default DetalleProducto