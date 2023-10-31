import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import SigIn from '../../Components/auth/signIn';
const CrearCuenta = () => {
  return (
    <div className='h-screen flex flex-col justify-between'>
        <Header/>
        <SigIn/>
        <Footer/>
    </div>
  )
}

export default CrearCuenta