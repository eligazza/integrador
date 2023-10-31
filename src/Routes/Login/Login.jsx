import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import LogIn from '../../Components/auth/logIn';

const Login = () => {
  return (
    <div className='h-screen flex flex-col justify-between '>
        <Header/>
        <LogIn/>
        <Footer/>
    </div>
  )
}

export default Login