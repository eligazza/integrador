import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";
import CardFavorite from "../../Components/Card/CardFavorite";
import { Input } from "@nextui-org/react";
import { countries, category, list, tours } from "/public/data.jsx";
import { Select, SelectItem } from "@nextui-org/react";
import { Pagination, Button, Image } from "@nextui-org/react";

const Home = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const shuffledTours = [...tours].sort(() => Math.random() - 0.5);
  const favoriteTours = [...tours]
    .sort((a, b) => b.favorites - a.favorites)
    .slice(0, 4);

  const itemsPerPage = 6; // Cantidad de tours por página

  return (
    <main>
      <Header />
      <body className=" relative flex flex-col justify-center">
      <img
            removeWrapper
            alt="Card background"
            className="z-0 top-0 w-full  object-fit absolute h-[700px]"
            src="/images/background2.png"
          />
        <section className=" flex justify-center ">
          <div className=" z-10 top-1 flex flex-col !items-start gap-8 w-full">
            <h1 className="text-center py-10 text-[#B185A8] font-bold text-[36px] w-full">
              ¡Elegí tu tour guiado!
            </h1>
            
            <div className="flex self-center bg-[#F9F3DB] p-2 rounded-[12px] gap-2">
              
              <Select
                label="Ubicacion"
                placeholder="¿A donde te gustaría ir?"
                selectionMode="multiple"
                className="max-w-xs w-[225px]"
                startContent={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                }
              >
                {countries.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    {country.label}
                  </SelectItem>
                ))}
              </Select>
              <Button isIconOnly className="bg-[#E06A00] text-white h-18 w-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </Button>
            </div>
            <div className="flex self-center bg-[#F9F3DB] p-2 rounded-[12px] gap-2">
              <Input
                label="Fecha"
                type="date"
                placeholder="¿En qué fecha?"
                className="max-w-xs w-[225px]"
                startContent={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                }
              />
              <Button isIconOnly className="bg-[#E06A00] text-white h-18 w-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </Button>
            </div>
            <img src="/images/Frame-Decor-Img.png" alt="Tipo de Tour" className="rounded-[30px] object-fit bg-transparent self-center pt-4" />
            <div className="flex flex-col self-center  p-3 rounded-[12px] gap-2 w-full">
              <h2 className=" bg-[#B185A8] text-center w-3/5 py-2 mx-auto rounded-[16px] text-[12px] text-white my-8">
                ¡Elegí tu tipo de tour!
              </h2>
              <div className="flex flex-row gap-6 px-3 py-4 text-[#B185A8] text-center">
            <article className="w-1/5">
              <img src="/images/Deporte.png" alt="Tipo de Tour" className="rounded-[30px] object-fit" />
              <p>Deporte</p>
            </article>
            <article className="w-1/5">
              <img src="/images/Cultura.png" alt="Tipo de Tour" className="rounded-[30px]" />
              <p>Cultura</p>
            </article>
            <article className="w-1/5">
              <img src="/images/Naturaleza.png" alt="Tipo de Tour" className="rounded-[30px]" />
              <p>Naturaleza</p>
            </article>
            <article className="w-1/5">
              <img src="/images/Comida.png" alt="Tipo de Tour" className="rounded-[30px]" />
              <p>Comida</p>
            </article>
          </div>
            </div>
          </div>

 
        </section>
             
        <section>
        <img
            src="/images/Recomendaciones.png"
            alt="Logo de la empresa"
            className="object-fit pr-4 py-8"
          />
        </section>

        <div className="flex flex-col flex-wrap gap-8 mx-auto">
          {favoriteTours.map((tour) => (
            <CardFavorite
              key={tour.id}
              title={tour.name}
              price={tour.price}
              location={tour.location}
              rating={tour.rating}
              images={tour.images[0]}
            />
          ))}
        </div>
        <h2 className="bg-[#E06A00] text-center w-3/5 py-2 mx-auto rounded-[16px] text-[12px] text-white my-8">
          Todos nuestros tours
        </h2>
        <div className="flex flex-row flex-wrap gap-8 justify-center">
          {shuffledTours
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((tour) => (
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

        <Pagination
          className="py-10 self-center"
          classNames={{
            cursor: "bg-[#B185A8]   font-bold",
          }}
          showControls
          total={Math.ceil(tours.length / itemsPerPage)}
          page={currentPage}
          onChange={setCurrentPage}
        />
      </body>
      {/*<Footer/>*/}
    </main>
  );
};

export default Home;
