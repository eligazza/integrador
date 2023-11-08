import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useRef, ChangeEvent } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Input, Textarea } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { useAuth } from "../../Context/AuthContext";
import {
  Image,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Switch,
} from "@nextui-org/react";
import { AlertIcon, CheckIcon } from "../../utils/icons";

const SignIn = () => {
  const [inputPassword, setInputPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const { currentUser, logout } = useAuth();
  const [isSelected, setIsSelected] = React.useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const signUp = async (form) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      // Ahora actualiza el campo displayName
      await updateProfile(userCredential.user, {
        displayName: form.name + " " + form.apellido,
      });

      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  const handlePassword = (e) => {
    setPasswordValue(e);
    setInputPassword(true);
  };
  return (
    <div className="self-center">
      <form onSubmit={handleSubmit(signUp)}>
        <div className=" flex flex-col p-10 gap-12">
          <Card className={ `max-w-[450px]  ${isSelected? 'bg-[#F9F3DB]':"bg-[#06A77D]"}`}>
            {isSelected ?
            <img 
            src="/images/tourist.jpg" className="absolute w-full h-full object-cover opacity-25  "
            />:
            <img src="/images/guider.jpg" className="absolute w-full h-full object-cover opacity-25  "/>}
            <CardHeader className="flex flex-col">
              <img src="/images/Logo.png" className="w-4/5 object-fit "></img>
              <h1 className="text-2xl font-semibold text-center pt-8 text-[#B185A8]">
                Registrarse
              </h1>
            </CardHeader>
            <Divider className="w-11/12 self-center" />
            <CardBody className="flex gap-4">
              <Input
                type="email"
                label="EMAIL"
                labelPlacement="outside"
                placeholder="mail@algo.com"
                color="warning"
                {...register("email")}
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

              <Input
                onValueChange={handlePassword}
                type="password"
                label="Contraseña"
                labelPlacement="outside"
                placeholder=" "
                color="warning"
                {...register("password")}
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
              {inputPassword && (
                <div className="border-gray border-2 rounded-md">
                  <p>La contraseña debe contener:</p>
                  <div className="flex flex-row gap-1 pl-4">
                    <p
                      className={
                        passwordValue.length < 6
                          ? "text-danger"
                          : "text-success"
                      }
                    >
                      {passwordValue.length < 6 ? <AlertIcon /> : <CheckIcon />}
                    </p>
                    <p
                      className={
                        passwordValue.length < 6
                          ? "text-danger"
                          : "text-success"
                      }
                    >
                      {" "}
                      Al menos 6 letras
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 pl-4">
                    <p
                      className={
                        !/\d/.test(passwordValue)
                          ? "text-danger"
                          : "text-success"
                      }
                    >
                      {!/\d/.test(passwordValue) ? (
                        <AlertIcon />
                      ) : (
                        <CheckIcon />
                      )}
                    </p>
                    <p
                      className={
                        !/\d/.test(passwordValue)
                          ? "text-neutral-500"
                          : "text-neutral-400"
                      }
                    >
                      {" "}
                      Algun numero (0-9){" "}
                    </p>
                  </div>
                </div>
              )}
              <Input
                type="text"
                label="Nombre"
                labelPlacement="outside"
                color="warning"
                placeholder=" "
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
              <Input
                type="text"
                label="Apellido"
                labelPlacement="outside"
                color="warning"
                placeholder=" "
                {...register("apellido")}
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
              <Switch isSelected={isSelected} onValueChange={setIsSelected}>
                {isSelected  ? <p>Quiero conocer!</p> : <p>Quiero ser Guider!</p>}
              </Switch>
            </CardBody>
            <CardFooter>
              <Button
                type="submit"
                size="lg"
                className="w-2/5 self-center bg-[#E06A00] text-white font-semibold self-center mx-auto"
              >
                Registrarse
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
