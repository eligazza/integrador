import React from "react";
import { useRef, ChangeEvent, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Input, Textarea } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { category, countries, list } from "../../dataTest/data";
import { useForm } from "react-hook-form";
import { uploadCloudinary } from "../../uploadCloudinary";
import axios from "axios";
import { Card, CardBody, CardHeader, Image, Button } from "@nextui-org/react";
import { CheckIcon, TrashIcon, XIcon } from "../../utils/icons";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
const CargarTour = () => {
  const [ok, setOk] = useState (false)
  const [fail, setFail] = useState (false)
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState("");

  console.log(images);

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

      const data = await axios.post("http://api.guider.com.ar:11000/tours", form);
      console.log(data);
    } catch (error) {
      if(error){
        console.log("ok")
        setOk(true)
      }
      else{
        console.log(error.response.data);
        console.log("fail")
        setFail(true)
      }
      
      
      
    }
  
    finally{
      onOpen();
    }
  };

  const handleImageDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="h-screen flex flex-col justify-between">
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
                {...register("category")}
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
                minRows={4}
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

              <div className="flex gap-10 flex-wrap">
                {Array.from(images).map((image, index) => (
                  <Card shadow="sm" key={index} className="w-[100px]">
                    <CardHeader className="absolute z-10 top-0 left-11 flex-col !items-start">
                      <Button
                        
                        isIconOnly
                        className="bg-[#dc3545] text-white"
                        size="sm"
                        onClick={() => handleImageDelete(index)}
                      >
                        <TrashIcon/>
                      </Button>
                    </CardHeader>
                    <CardBody className="overflow-visible p-0">
                      <Image
                        shadow="sm"
                        radius="lg"
                        className="z-0 w-full h-full object-cover"
                        src={URL.createObjectURL(image)}
                      />
                    </CardBody>
                  </Card>
                ))}
              </div>

              <input
                type="file"
                multiple
                onChange={(e) => setImages(e.target.files)}
                accept="image/*"
                className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm 
      file:bg-[#E06A00] file:text-white
      hover:file:bg-[#E06a00]
    "
              />
            </div>
          </div>
          <Button
            type="submit"
            size="sm"
            className="w-[50px] self-center bg-[#E06A00] text-white"
          >
            Subir Tour
          </Button>
        </div>
      </form>
      <>
        <Modal
          backdrop="transparent"
          isOpen={isOpen  && fail}
          onOpenChange={onOpenChange}
          placement="top"
          isDismissable={false}
          radius="none"
          classNames={{
            body: "py-6",
            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
            base: "border-[#292f46] bg-[#dc3545] dark:bg-[#19172c] text-[#a8b0d3]",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
             
                  <div className="flex ">
                    <div className="bg-[#dc3545] h-fill  w-1/12 text-white font-black border border-[#dc3545] flex items-center justify-center">
                     <XIcon className="p-auto" />
                    </div>
                    <div className="bg-[#fff1f1] w-11/12 border border-[#dc3545] text-[#dc3545] p-2">
                      <h1>Ups!</h1>
                      <p className="text-sm">Parece que tuvimos un problema</p>
                    </div>
                  </div>
            
              </>
            )}
          </ModalContent>
        </Modal>
        <Modal
          backdrop="transparent"
          isOpen={isOpen && ok}
          onOpenChange={onOpenChange}
          placement="top"
          isDismissable={false}
          radius="none"
          classNames={{
            body: "py-6",
            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
            base: "border-[#292f46] bg-[#28a745] dark:bg-[#19172c] text-[#a8b0d3]",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
             
                  <div className="flex ">
                    <div className="bg-[#28a745] h-fill  w-1/12 text-white font-black border border-[#28a745] flex items-center justify-center">
                     <CheckIcon className="p-auto" />
                    </div>
                    <div className="bg-[#e5f4e8] w-11/12 border border-[#28a745] text-[#28a745] p-2">
                      <h1>Okay!</h1>
                      <p className="text-sm">Su tour se ha subido sin problemas</p>
                    </div>
                  </div>
            
              </>
            )}
          </ModalContent>
        </Modal>
      </>
      <Footer />
    </div>
  );
};

export default CargarTour;
