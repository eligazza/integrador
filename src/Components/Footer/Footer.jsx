import React from 'react';
import { Link } from 'react-router-dom'; 


const Footer = () => {
  return (
    <footer className='h-[65px] bg-[#aaaaaa] flex justify-between px-8 ' >
      <div className='flex gap-2'>
        <Link to="/">
          <img src="/images/Logo.png" alt="Logo de la empresa"  className='h-[45px] object-fit'/>
        </Link>
        <span>Copyright , 2023, Digital House</span>
      </div>
      <div>   
        <p>Logos de Redes Sociales</p>
      </div>
    </footer>
  );
};

export default Footer;