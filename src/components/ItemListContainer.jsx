import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [listaProductos, setListaProductos] = useState(
    []
  );
  const productos = [
    { nombre: "FIFA 22", precio: "8500" },
    { nombre: "NBA 2K22", precio: "8000" },
    { nombre: "Elden Ring", precio: "4500" },
    { nombre: "Cyberpunk 2077", precio: "4000" },
  ];

  const imprimirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productos.length === 0) {
          reject("sin productos disponibles");
        } else {
          resolve(productos);
        }
      }, 3000);
    });
  };

  useEffect(() => {
    imprimirProductos()
      .then((respuesta) => setListaProductos(respuesta))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList lista={listaProductos} />
      <h2>Lista de juegos</h2>
    </div>
  );
};

export default ItemListContainer;