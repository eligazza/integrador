import React from "react";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { Button, DropdownSection } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import {
  Navbar,
  User,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Chip,
} from "@nextui-org/react";
import {
  AccountIcon,
  HamburgerIcon,
  LogInIcon,
  CreateAccountIcon,
} from "../../utils/icons.jsx";

const Header = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color.toUpperCase();
  }

  function stringAvatar(name) {
    return (
      name.split(" ")[0][0] + name.split(" ")[name.split(" ").length - 1][0]
    );
  }

  async function handleLogout() {
    setError("");

    try {
      await logout();
      window.location.href = "/";
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  const adminOptions = () => {
    return (
      <DropdownSection
        showDivider
        title={"Sector administrativo"}
        classNames={{ heading: "pl-4" }}
      >
        <DropdownItem
          key="agregarCategoria"
          href="/admin/agregarcategoria"
          className="text-black"
          as={Link}
        >
          Agregar categoria
        </DropdownItem>
        <DropdownItem
          key="editarUsuario"
          href="/admin/editarusuario"
          as={Link}
          className="text-black"
        >
          Editar Usuarios
        </DropdownItem>
      </DropdownSection>
    );
  };

  const prinOptions = () => {
    return (
      <DropdownSection showDivider>
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold text-center">Bienvenido!</p>
          <p className="font-semibold text-center">{currentUser.displayName}</p>
        </DropdownItem>
        <DropdownItem
          key="perfil"
          startContent={<AccountIcon />}
          href="/perfil"
          className="text-black"
          as={Link}
        >
          Mi perfil
        </DropdownItem>
      </DropdownSection>
    );
  };

  const guiderOptions = () => {
    return (
      <DropdownSection
        showDivider
        title={"Soy Guider!"}
        classNames={{ heading: "pl-4" }}
      >
        <DropdownItem
          key="cargarTour"
          href="/admin/cargar"
          className="text-black"
          as={Link}
        >
          Cargar un tour
        </DropdownItem>
        <DropdownItem
          key="editarTours"
          href="/admin/editar"
          className="text-black"
          as={Link}
        >
          Editar mis tours
        </DropdownItem>
      </DropdownSection>
    );
  };

  return (
    <header className="sticky top-0 w-full bg-orange-200 flex justify-between items-center h-[75px] z-50 ">
      <Navbar className="h-full">
        <NavbarBrand>
          <a href="/" aria-current="page">
            <img
              src="/images/Logo.png"
              alt="Logo de la empresa"
              className="h-[60px] object-contain"
            />
          </a>
          <span className="hidden lg:flex">Un viaje, una aventura</span>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-4" justify="center">
          <NavbarItem href="/" as={Link} className="text-black">
            Inicio
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {currentUser ? (
            <NavbarItem className="hidden sm:flex gap-4">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <User
                    isFocusable
                    as="button"
                    name={currentUser?.displayName}
                    description={
                      <Link onPress={handleLogout}>
                        <Chip
                          size="sm"
                          variant="bordered"
                          className="text-[10px] h-5  border-[#06A77D] text-[#06A77D] font-semibold"
                        >
                          Cerrar Sesion
                        </Chip>
                      </Link>
                    }
                    avatarProps={{
                      name: stringAvatar(currentUser?.displayName),
                      className: `bg-[#06A77D] font-black text-[16px] text-white`,
                    }}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  {prinOptions()}
                  {currentUser.role == "guider" ||
                    currentUser.role == "admin" ? guiderOptions(): null}

                  {currentUser?.role === "admin" && adminOptions()}
                  <DropdownItem
                    key="logout"
                    className="text-danger"
                    color="danger"
                    onPress={handleLogout}
                  >
                    Cerrar Sesion
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          ) : (
            <>
              <NavbarItem className="hidden sm:flex gap-4">
                <Link href="/registro">
                  <Button
                    size="md"
                    className="bg-[#E06A00] text-white font-semibold"
                  >
                    Crear Cuenta
                  </Button>
                </Link>
              </NavbarItem>
              <NavbarItem className="hidden sm:flex gap-4">
                <Link href="/login">
                  <Button
                    size="md"
                    className="bg-[#06A77D] text-white font-semibold"
                  >
                    Iniciar Sesion
                  </Button>
                </Link>
              </NavbarItem>
            </>
          )}

          <NavbarItem className=" flex gap-4 sm:hidden">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button isIconOnly className="bg-transparent">
                  <HamburgerIcon />
                </Button>
              </DropdownTrigger>

              {!currentUser ? (
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem
                    key="perfil"
                    startContent={<LogInIcon />}
                    href="/login"
                    as={Link}
                    className="text-[#E06A00]"
                  >
                    Iniciar Sesion
                  </DropdownItem>
                  <DropdownItem
                    key="perfil"
                    startContent={<CreateAccountIcon />}
                    href="/registro"
                    as={Link}
                    className="text-[#06A77D]"
                  >
                    Crear Cuenta
                  </DropdownItem>
                </DropdownMenu>
              ) : (
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  {prinOptions()}
                  {currentUser.role == "guider" ||
                    currentUser.role == "admin" ? guiderOptions(): null}

                  {currentUser?.role === "admin" && adminOptions()}

                  <DropdownItem
                    key="logout"
                    className="text-danger"
                    color="danger"
                    onPress={handleLogout}
                  >
                    Cerrar Sesion
                  </DropdownItem>
                </DropdownMenu>
              )}
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default Header;
