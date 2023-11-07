import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import SigIn from '../../Components/auth/signIn';
const AgregarCategoria = () => {
  return (
    <div className='h-screen flex flex-col justify-between'>
        <Header/>
        <h1>Agregar categoria</h1>
        <Footer/>
    </div>
  )
}

export default AgregarCategoria