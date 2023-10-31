import React from "react";
import { useRef, ChangeEvent, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Input, Textarea } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { category, countries, list } from "../../dataTest/data";
import { useForm } from 'react-hook-form';
import { uploadCloudinary } from "../../uploadCloudinary";
import axios from "axios";
import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Button,
} from "@nextui-org/react";

const CargarTour = () => {
  const [images, setImages] = useState([])
  const [url, setUrl] = useState("");

  
  console.log(images)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      rating: 0,
      guide: 1,
    },
  });

  const tourSubmit = async (form) => {
    try {
      let arr = [];
      for (let i = 0; i < images.length; i++) {
        const data = await uploadCloudinary(images[i]);
        arr.push(data);
      }
      setUrl(arr);

      form.images = url;
      console.log(form);
      console.log(url);

      // Use the fetch API for the POST request
      fetch("http://localhost:3000/tour", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='h-screen flex flex-col justify-between'>
      <Header />
      <form onSubmit={handleSubmit(tourSubmit)}>
        <div className=" hidden lg:flex flex-col p-10 gap-12">
          <h1 className="text-2xl font-semibold text-center">Cargar Tour</h1>

          <div className="flex flex-wrap justify-evenly overflow-hidden  ">
            <div className="w-2/5 flex flex-col gap-8">
              <Input
                type="text"
                label="Nombre del Tour"
                labelPlacement="outside"
                placeholder="Ingrese el nombre de su tour"
                color="warning"
                {...register("name")}
                classNames={{
                  label: "text-[#B185A8] ",
                  input: [
                    "bg-[#F9F3DB]",
                    "text-[#B185A8]",
                    "placeholder:text-[#B185A8]",
                  ],
                  innerWrapper: "bg-[#F9F3DB]",
                  placeholder: "text-[#B185A8]",
                }}
              />
              <div className="flex gap-12">
                <Input
                  type="text"
                  label="Duracion"
                  labelPlacement="outside"
                  placeholder="00:00"
                  description="Duracion total del tour"
                  color="warning"
                  {...register("duration")}
                  classNames={{
                    label: "text-[#B185A8] ",
                    input: ["text-[#B185A8]", "placeholder:text-[#B185A8]"],
                    placeholder: "text-[#B185A8]",
                    description: "text-[#B185A8]",
                  }}
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small text-[#B185A8]">
                        hrs
                      </span>
                    </div>
                  }
                />
                <Input
                  type="number"
                  label="Precio"
                  labelPlacement="outside"
                  placeholder="0.00"
                  color="warning"
                  {...register("price")}
                  classNames={{
                    label: "text-[#B185A8] ",
                    input: ["text-[#B185A8]", "placeholder:text-[#B185A8]"],
                    placeholder: "text-[#B185A8]",
                  }}
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small text-[#B185A8]">
                        $
                      </span>
                    </div>
                  }
                />
              </div>
              <Select
                label="Ubicacion"
                placeholder="Seleccione una ubicacion"
                labelPlacement="outside"
                className="max-w-xs"
                color="warning"
                disableSelectorIconRotation
                {...register("location")}
                classNames={{
                  label: "text-[#B185A8] ",
                  input: ["text-[#B185A8]", "placeholder:text-[#B185A8]"],
                  placeholder: "text-[#B185A8]",
                  renderValue: [
                    "text-[#B185A8]",
                    "bg-[#F9F3DB]",
                    "hover:bg-[#F9F3DB]",
                  ],
                  popover: [
                    "text-[#B185A8]",
                    "bg-[#F9F3DB]",
                    "hover:bg-[#F9F3DB]",
                  ],
                  value: ["text-[#B185A8]"],
                }}
              >
                {countries.map((countries) => (
                  <SelectItem
                    key={countries.value}
                    value={countries.value}
                    className=""
                  >
                    {countries.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Categoria"
                placeholder="Seleccione una categoria"
                labelPlacement="outside"
                className="max-w-xs"
                disableSelectorIconRotation
                color="warning"

                classNames={{
                  label: "text-[#B185A8] ",
                  input: ["text-[#B185A8]", "placeholder:text-[#B185A8]"],
                  placeholder: "text-[#B185A8]",
                  popover: ["text-[#B185A8]", "bg-[#F9F3DB]"],
                  value: ["text-[#B185A8]", "hover:bg-[#F9F3DB]"],
                }}
              >
                {category.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="w-2/5 flex flex-col gap-6">
              <Textarea
                color="warning"
                minRows={6}
                label="Descripcion"
                labelPlacement="outside"
                placeholder="Ingrese una descripcion detallada de su tour"
                {...register("description")}
                classNames={{
                  label: "text-[#B185A8] ",
                  input: [
                    "bg-[#F9F3DB]",
                    "text-[#B185A8]",
                    "placeholder:text-[#B185A8]",
                  ],
                  innerWrapper: "bg-[#F9F3DB]",
                  placeholder: "text-[#B185A8]",
                }}
              />
              <h2 className="text-[#B185A8]">Imagenes</h2>
              {/*
              <div className="flex gap-10">
                {list.map((item, index) => (
                  <Card shadow="sm" key={index} className="w-96">
                    <CardHeader className="absolute z-10 top-1 left-1 flex-col !items-start">
                      <Button isIconOnly color="danger" size="sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </Button>
                    </CardHeader>
                    <CardBody className="overflow-visible p-0">
                      <Image
                        shadow="sm"
                        radius="lg"
                        alt={item.title}
                        className="z-0 w-full h-full object-cover"
                        src={item.img}
                      />
                    </CardBody>
                  </Card>
                ))}
              </div>
              <Button  color="danger" size="sm">
                Agregar imagenes
              </Button>*/}
              <input
          
            type="file"
            multiple
            onChange={(e)=> setImages(e.target.files)}
            accept="image/*"
          />
            </div>
          </div>
          <Button type="submit" size="sm" className="w-[50px] self-center bg-[#E06A00] text-white">
            Subir Tour
          </Button>
        </div>
      </form>
      <h1 className=" lg:hidden text-center text-[#B185A8] px-10">Ups!. Debe estar en una PC o Notebook para cargar su tour</h1>
      <Footer />
    </div>
  );
};

export default CargarTour;