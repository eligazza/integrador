import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { tours } from "../../../public/data.jsx";
import { Select, SelectItem } from "@nextui-org/react";

const DetalleProducto = () => {
  const favoriteTours = [...tours];

  const [guide, setGuides] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [fav, setFav] = useState([1,2,3])
  const [index_fav, setIndex_fav] = useState(1);


  let index =1; 


  const goBack = () => {
    navigate(-1);
  };

  const setFavorite= () => { 
    index_fav[1] = fav; 
    if(index_fav[1]==1){
      setFav([2, 3, 1])
      setIndex_fav(2)
    }else if(index_fav[2]==2){
      setFav(3,1,2)
      setIndex_fav(3)
    }else{
      setFav([1,2,3])
      setIndex_fav(1);
    }
  }

  const outFavorite = () => {
    setFav([3,2,1])    
  }

  /*useEffect(()=> {
    setFavorite()    
  })*/

  useEffect(() => {
    setLoading(false);
    index = parseInt(window.location.href.slice(-2).replace(/[^a-zA-Z0-9 ]/g, ''));
    setGuides(favoriteTours[index])
    //miEvento(favoriteTours[index]);
    /*fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data)=>{
          console.log(data)
          console.log(data.length)
          setDoctor(data);})
        .finally(()=>{
        setLoading(false);
      })  
      .catch((error) =>{
        console.error("Error al obtener una respuesta", error);
      })
    */
  }, []);

  return (
    <div>
      <Header />

      {loading ? (
        <ul>
          <li>
            <div>Loading ...</div>
          </li>
        </ul>
      ) : (
        <div className="cardDetail">
          <div className="overflow-visible flex items-center space-x-2 text-base mx-auto px-8 py-10 justify-between">
            <h1 className="flex-initial font-montserrat text-[32px] font-bold ">
              {guide?.name}
            </h1>
            <h4 className=" flex-none basis-3 font-montserrat text-[24px] text-[#FEBC14] font-bold text-center">
              {guide?.rating}★
            </h4>
            <div className="flex-initial flex space-x-2 mx-auto">
             
              <button
                className="justify-item-center font-montserrat text-[24px] font-light"
                onClick={goBack}
              > 
              <img
                src="/images/angulo-izquierdo.svg"
                alt="Back late"
                className="justify-item-center flex text-94 w-14"
              />
              <div className="justify-item-centerflex">
                {" "}
                Atrás{" "}
                </div>
              </button>
            </div>
          </div>
          <div className="flex px-8 justify-between ">
            <div className="flex">
              <img
                src="/images/location_1.svg"
                alt="location number 1"
                className="w-7"
              />
              <h3 className="pl-3.5 font-montserrat text-[24px] font-light">
                {guide?.location}
              </h3>
            </div>
            <h2 className="text-[#E06A00] text-[30px] font-semibold">
              {guide?.price}
            </h2>
          </div>

          <div className="flex justify-center ml-4 mt-10">
            <img
              alt="Card background"
              radius="none"
              className=" w-[20rem] self-center m-20 "
              src={guide[0]?.images[0]}
              width="100%"
            />
          </div>
          <div className="flex  justify-center">

            <div className="flex-initial">
            <button
                className="justify-item-center font-montserrat text-[24px] font-light"
                onClick={()=>setIndex_fav((index_fav)=> index_fav+1)}
              >
                counted {index_fav} 
              <img
                src="/images/angulo-izquierdo1.svg"
                alt="Back late"
                className="justify-item-center flex text-94 w-[4rem] pt-[6rem]"
              />
              </button>
            </div>
            <div className="flex-initial">
            <img
              alt="Card bac  kground"
              radius="none"
              className=" w-[10rem] rounded-3xl m-4 bg-gradient-to-r from-inherit "
              src={guide[0]?.images[1]}
              width="100%"
            />
            </div>
            <div className="flex-initial">
            <img
              alt="Card background"
              radius="none"
              className=" w-[15rem] rounded-3xl m-4 "
              src={guide[0]?.images[2]}
              width="100%"
            />
            </div>
            <div className="flex-initial">
            <img
              alt="Card background"
              radius="none"
              className=" w-[10rem] rounded-3xl m-4 bg-gradient-to-r from-inherit"
              src={guide[0]?.images[3]}
              width="100%"
            />   
            </div>
            <div className="flex-initial">
               <button
                className="justify-item-center font-montserrat text-[24px] font-light"
                onClick={()=>setFavorite((index_fav)=> index_fav-1)}
                > 
                Counter {index_fav}
                <img
                  src="/images/angulo-izquierdo2.svg"
                  alt="Back late"
                  className="justify-item-center flex text-94 w-[4rem] pt-[6rem]"
                />
              </button>
            </div>
          </div>
          <div className="flex py-10 flex-row justify-between mx-8">
            <div>
              <h2 className="flex flex-initial text-[#E06A00] font-montserrat text-[30px] font-bold py-4 w-[100%]">
                Descripción
              </h2>
              <div className="justify-item-center font-montserrat text-[18px] mx-3">
                {guide?.description}
              </div>
            
            <div>
              <h2 className="flex flex-initial text-[#E06A00] font-montserrat text-[30px] font-bold py-4 w-[100%]">Atributos</h2>
              <div className="flex mx-12">
                <div className="flex">
                  <ul>
                    <li>
                      <div className="flex">
                        <img src="/images/atri_1.svg" alt="" className="w-[2.2rem]"/> 
                        <h3 className="mt-2 py-10px px-5 font-montserrat text-[16px] font-bold" >Cantidad max. personas: </h3>
                        <h3 className="text-[#E06A00] font-montserrat text-[30px] font-bold">{guide?.category}</h3>
                      </div>
                    </li>
                    <li>
                    <div className="flex mt-8 content-start">
                       <img src="/images/atri_7.svg" alt="" className="w-[2rem]"/>
                       <h3 className="px-10  font-montserrat text-[16px] font-bold" >Duración:  </h3>
                       <h3 className="text-[#E06A00] font-montserrat text-[40px] font-bold">{guide?.duration}</h3>
                    </div>   
                    </li>
                    <li>
                      <div className="flex mt-8">
                         <img src="/images/atri_2.svg" alt="" className="w-[2rem]"/>
                         <h3 className="px-5"> Medio de pago:</h3>
                         <div className="flex justify-items-center">
                          <img src="/images/atri_4.svg" alt="" className="w-[2.2rem] flex-1 mx-2"/>
                          <img src="/images/atri_5.svg" alt="" className="w-[2.2rem] flex-1 mx-2"/>
                          <img src="/images/atri_3.svg" alt="" className="w-[2.2rem] flex-1 mx-2"/>
                         </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="flex-align ml-[24rem] ">
                  <h2 className="flex flex-col font-montserrat text-[16px] font-bold text-[#002000] "> Guias disponibles: </h2>
                  <div className="flex p-3">
                  <img src="/images/person-profile.svg" alt="" className="w-[3.2rem] flex-1 mx-2"/>  
                  <h3 className="flex py-3">{guide?.guide}</h3>
                  </div>
                </div>

               
              </div>
              <div className="flex self-center m-20">
                  <button className=" justify-item-start w-[9rem] h-[4rem] bg-[#E06A00] rounded-3xl text-[#FFFFFF] font-montserrat text-[25px] font-bold ">Reservar</button>
                </div>
            </div>
            
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default DetalleProducto;
