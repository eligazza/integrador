import React from "react";

import { Button } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-orange-200 flex justify-between items-center h-[75px] z-50 ">
      <Navbar className="h-full">
        <NavbarBrand>
          <img
            src="/images/Logo.png"
            alt="Logo de la empresa"
            className="h-[60px] object-contain"
          />
          <span className="hidden lg:flex">Lema de la empresa</span>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="/" aria-current="page">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/admin/cargar">
              Cargar Tour
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex gap-4" >
            <Button
              size="md"
              className="bg-[#E06A00] text-white font-semibold"
            >
              Crear Cuenta
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden sm:flex gap-4">
            <Button size="md" className="bg-[#06A77D] text-white font-semibold">
              Iniciar Sesion
            </Button>
          </NavbarItem> 
          <NavbarItem className=" flex gap-4 sm:hidden">
            <button >
            <img
            src="/images/menu-burger.svg"
            alt="Logo de la empresa"
            className="h-[40px] object-contain "
          />
            </button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default Header;
