import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState({});
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "FIFA 22",
            description: "Con la potencia de Football™, EA SPORTS FIFA 22 mejora la experiencia con tecnología de juego HyperMotion de última generación.",
            price: 8000,
            stock: 10,
            pictureUrl: "https://i.ibb.co/Jsrbxb0/fifa-22.png",
            categoryId: "Juegos de deporte",
          },
          {
            id: 2,
            name: "NBA 2K22",
            description: "NBA 2K22 pone todo el universo del baloncesto a tus pies. JUEGA YA a la NBA y la WNBA en entornos realistas contra equipos y jugadores auténticos.",
            price: 7500,
            stock: 10,
            pictureUrl:
              "https://i.ibb.co/5hgS1R2/nba-2k22.jpg",
            categoryId: "Juegos de deporte",
          },
          {
            id: 3,
            name: "ELDER RING",
            description: "La historia de Elden Ring es la del Sinluz, un exiliado que regresa a un marchito y enorme reino conocido como las Tierras Intermedias. Su propósito: reclamar el poder del Círculo de Elden.",
            price: 4500,
            stock: 10,
            pictureUrl:
              "https://i.ibb.co/k59ktbs/elden-ring.jpg",
            categoryId: "Juegos de rol",
          },
        ]);
      }, 2000);
    });

    obtenerProductos.then((res) => {
      setProducto(res.find((e) => e.id == itemId));
    });
  }, []);
  return <ItemDetail {...producto} />;
};

export default ItemDetailContainer;