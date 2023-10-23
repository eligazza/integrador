import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/Card';
import styles from "./home.module.css"
import { Link } from 'react-router-dom'; 
import { countries, category, list, tours } from '/public/data.jsx';
const Home = () => {


  return (
    <main>
      <Header/>
        <body className='flex flex-col align-center'>
          <section>
            <h1>¡Elegí tu tour guiado!</h1>
            <div className={styles.contenedorbarras}>
              <h2>Soy una barra de busqueda en crecimiento</h2>
              <h2>Soy una barra de busqueda en crecimiento</h2>
            </div>
            <img src="/images/Untitled.png" alt="Logo de la empresa" className={styles.tresimagenesmundo}/>
          </section>
          <section>
            <h2>¡Elegí tu tipo de tour!</h2>
            <div>
              <article>
                <img src="" alt="Tipo de Tour"/>
                <p>Deporte</p>
              </article>
              <article>
                <img src="" alt="Tipo de Tour"/>
                <p>Cultura</p>
              </article>
              <article>
                <img src="" alt="Tipo de Tour"/>
                <p>Comida</p>
              </article>
              <article>
                <img src="" alt="Tipo de Tour"/>
                <p>Naturaleza</p>
              </article>
            </div>
            <img src="/images/Recomendaciones.png" alt="Logo de la empresa" className={styles.tresimagenesmundo}/>
          </section>
          <section>
          <div className = "flex flex-row flex-wrap gap-8">
            {tours.map((tour) => (
              <Card
                key={tour.id}
                title={tour.name}
                price={tour.price}
                location={tour.location}
                rating={tour.rating}
                images={tour.images[0]}
              />
              ))}
            </div>
            <Link to="producto/id">
              <button>Quiero ver mas tours</button>
            </Link>
          </section>
          <p>Loremm ipsum dolor sit amet consectetur adipisicing elit. Maxime, ipsum quo architecto aspernatur provident iure dicta voluptatibus vel porro cupiditate quas earum facere, officia ad vitae! Incidunt similique eos perferendis.</p>   
        </body> 
      <Footer/>
    </main>
  )
}

export default Home