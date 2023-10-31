import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Chip } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const [fail, setFail] = useState(false);

  const signIn = (form) => {
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        setFail(false);
        window.location.href = "/";
      })
      .catch((error) => {
        setFail(true);
      });
  };

  return (
    <div className="self-center">
      <form onSubmit={handleSubmit(signIn)}>
        <div className=" flex flex-col p-10 gap-12">
          <Card className="max-w-[450px] py-6">
            <CardHeader className="flex flex-col">
              <img src="/images/Logo.png" className="w-4/5 object-fit py"></img>
              <h1 className="text-2xl font-semibold text-center pt-8 text-[#B185A8]">
                Iniciar Sesion
              </h1>
            </CardHeader>
            <Divider className="w-11/12 self-center" />
            <CardBody className="flex gap-8">
              <Input
                type="email"
                label="Correo electronico"
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
                type="password"
                label="Contraseña"
                labelPlacement="outside"
                placeholder="Contraseña"
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
              {fail && (
                <Chip color="danger" variant="bordered" className="self-center">
                  Mail o Constraseña Incorrectos
                </Chip>
              )}
            </CardBody>
            <CardFooter >
              <Button
                type="submit"
                size="lg"
                className="w-2/5 self-center bg-[#E06A00] text-white font-semibold self-center mx-auto"
              >
                Ingresar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
