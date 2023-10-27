//import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
//import Card from '../../Components/Card/Card';
import styles from "./home.module.css"
import { Link } from 'react-router-dom'; 
import BarrasBusqueda from '../../Components/BarrasBusqueda/BarrasBusqueda';
//import {countries,category,list,tours } from '/public/data.jsx'

const Home = () => {


  return (
    <main className={styles} >
      <Header/>
        <body>
          <section className={styles.sectionTop}>
          
            <h1>¡Elegí tu tour guiado!</h1>
            <div className={styles.contenedorbarras}>
              <BarrasBusqueda/>
            </div>
            <img src="/images/Untitled.png" alt="Logo de la empresa" className={styles.tresimagenesmundo}/>
          </section>
          <section className={styles.sectionMid}>
            <h2>¡Elegí tu tipo de tour!</h2>
            <div className={styles.tourCard}>
              <article>
                <img src="/images/Deporte.png" alt="Tipo de Tour" className={styles.tourCardImg}/>
                <p>Deporte</p>
              </article>
              <article>
                <img src="/images/Cultura.png" alt="Tipo de Tour" className={styles.tourCardImg}/>
                <p>Cultura</p>
              </article>
              <article>
                <img src="/images/Naturaleza.png" alt="Tipo de Tour" className={styles.tourCardImg}/>
                <p>Naturaleza</p>
              </article>
              <article>
                <img src="/images/Comida.png" alt="Tipo de Tour" className={styles.tourCardImg}/>
                <p>Comida</p>
              </article>              
            </div>
            <img src="/images/Recomendaciones.png" alt="Recomendaciones" className={styles.recomendacionesImg}/>
          </section>
          <section  className={styles.sectionBot}>
            <div className={styles.tourBox}>
              <img src="/images/TourGenericoCard.png" alt="" className={styles.cardGenerica}/>
              <img src="/images/TourGenericoCard.png" alt="" className={styles.cardGenerica}/>
              <img src="/images/TourGenericoCard.png" alt="" className={styles.cardGenerica}/>
              <img src="/images/TourGenericoCard.png" alt="" className={styles.cardGenerica}/>
              <img src="/images/TourGenericoCard.png" alt="" className={styles.cardGenerica}/>
              <img src="/images/TourGenericoCard.png" alt="" className={styles.cardGenerica}/>
            </div>
            {/*<div className = "flex flex-row flex-wrap gap-8">*/}
            {/*{tours.map((tour) => (*/}
              {/*<Card*/}
                {/*key={tour.id}*/}
                {/*title={tour.name}*/}
                {/*price={tour.price}*/}
                {/*location={tour.location}*/}
                {/*rating={tour.rating}*/}
                {/*images={tour.images[0]}*/}
              {/*/>*/}
              {/*))}*/}
           {/* </div>*/}
            <Link to="producto/id">
              <button className={styles.buttonMasTours}>Quiero ver mas tours</button>
            </Link>
          </section>
        </body> 
      <Footer/>
    </main>
  )
}

export default Home