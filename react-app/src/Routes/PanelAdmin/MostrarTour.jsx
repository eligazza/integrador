import React, { useState } from 'react';
import styles from "../Home/home.module.css"

function MostrarTour() {
  const [mostrarDiv, setMostrarDiv] = useState(false);

  const toggleDiv = () => {
    setMostrarDiv(!mostrarDiv);
  };

  return (
    <div>
      <button onClick={toggleDiv}>Mostrar/Esconder</button>
      {mostrarDiv && (
        <div className={styles.tourBox}>
          <img src="/images/TourGenericoCard.png" alt="" className={styles.cardGenerica} />
          <img src="/images/TourGenericoCard.png" alt="" className={styles.cardGenerica} />
          <img src="/images/TourGenericoCard.png" alt="" className={styles.cardGenerica} />
          <img src="/images/TourGenericoCard.png" alt="" className={styles.cardGenerica} />
          <img src="/images/TourGenericoCard.png" alt="" className={styles.cardGenerica} />
          <img src="/images/TourGenericoCard.png" alt="" className={styles.cardGenerica} />
        </div>
      )}
    </div>
  );
}

export default MostrarTour;
