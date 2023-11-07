import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  getKeyValue,
  Link,
  Button,
} from "@nextui-org/react";
import { DeleteIcon } from "../../utils/icons";
import { EyeIcon } from "../../utils/icons";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "Nombre", uid: "name", sortable: true },
  { name: "Categoria", uid: "category", sortable: true },
  { name: "Ubicacion", uid: "location", sortable: true },
  { name: "Precio", uid: "price" },
  { name: "ACTIONS", uid: "actions" },
];

const MostrarTours = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState(null);
  const tourGet = async () => {
    try {
      const data = await axios.get(`http://api.guider.com.ar:11000/tours`);
      setTours(data.data);
      //setImages(data.data.images)
      console.log(data.data);
    } catch (error) {
      // console.log(data);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    tourGet();
  }, []);
  const renderCell = React.useCallback((tours, columnKey) => {
    const cellValue = tours[columnKey];

    switch (columnKey) {
      case "name":
        return <p>{tours.name}</p>;
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-400">
              {tours.team}
            </p>
          </div>
        );
      case "category":
        return <p>{tours.category}</p>;
      case "location":
        return <p>{tours.location}</p>;
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <div className="relative flex items-center gap-2">
              <Button isIconOnly onPress={() => handleDelete(tours.id)}>
                <DeleteIcon />
              </Button>
              <Button isIconOnly as={Link} href={`/admin/editar/${tours.id}`}>
                <EyeIcon />
              </Button>
            </div>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const handleDelete = async (tourId) => {
    console.log(`Delete tour ID: ${tourId}`);
    try {
      const data = await axios.delete(
        `http://api.guider.com.ar:11000/tours/${tourId}`
      );
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className="flex flex-col gap-8">
        <h1 className="text-center">Mis tours</h1>
        {!isLoading && (
          <Table aria-label="Example table with custom cells" className="px-20">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  align={column.uid === "actions" ? "center" : "start"}
                >
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody
              items={tours}
            >
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MostrarTours;
