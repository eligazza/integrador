import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.appfooter}>
      <div className={styles.footerleft}>
        <Link to="/">
          <img src="/images/Logo.png" alt="Logo de la empresa" className={styles.logo}/>
        </Link>
        <span>Copyright , 2023, Digital House</span>
      </div>
      <div className={styles.footerright}>   
        <p>Logos de Redes Sociales</p>
      </div>
    </footer>
  );
};

export default Footer;