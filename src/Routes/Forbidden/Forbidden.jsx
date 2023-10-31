import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
const Forbidden = () => {
  return (
    <div className='h-screen flex flex-col justify-between'>
        <Header/>
        <h1>Se requiere ser administrador o guia</h1>
        <Footer/>
    </div>
  )
}

export default Forbidden