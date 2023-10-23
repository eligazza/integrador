import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Input, Textarea } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { category, countries, list } from "/public/data";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";


const CargarTour = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col p-10 gap-12 ">
        <h1 className="text-2xl font-semibold text-center">
          Cargar Tour
        </h1>

        <div className="flex flex-wrap justify-evenly overflow-hidden  ">
          <div className="w-2/5 flex flex-col gap-8">
            <Input
              type="text"
              label="Nombre del Tour"
              labelPlacement="outside"
              placeholder="Ingrese el nombre de su tour"
            />
            <div className="flex gap-12">
              <Input
                type="number"
                label="Duracion"
                labelPlacement="outside"
                placeholder="00:00"
                description="Duracion total del tour"
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">hrs</span>
                  </div>
                }
              />
              <Input
                type="number"
                label="Precio"
                labelPlacement="outside"
                placeholder="0.00"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">$</span>
                  </div>
                }
              />
            </div>
            <Select
              label="Ubicacion"
              placeholder="Seleccione una ubicacion"
              labelPlacement="outside"
              className="max-w-xs"
              disableSelectorIconRotation

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
              minRows={6}
              label="Descripcion"
              labelPlacement="outside"
              placeholder="Ingrese una descripcion detallada de su tour"
            />
                    <h2>Imagenes</h2>
        <div className="flex gap-10">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} className="w-96">
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100000px"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-center">
                <Button color="danger" size="sm">
                  Borrar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default CargarTour