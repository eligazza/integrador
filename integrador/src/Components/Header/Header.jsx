import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.appheader}>
      <div className={styles.headerleft}>
        <Link to="/">
          <img src="/images/Logo.png" alt="Logo de la empresa" className={styles.logo}/>
        </Link>
        <span>Lema de la empresa</span>
      </div>
      <div className={styles.headerright}>
        <Link to="/registro">
          <button className={styles.registrobutton}>Crear cuenta</button>
        </Link>
        <Link to="/login">
          <button className={styles.loginbutton}>Iniciar sesión</button>
        </Link>   
      </div>
    </header>
  );
};

export default Header;