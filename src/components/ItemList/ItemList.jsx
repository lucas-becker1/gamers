import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((producto) => (
        <Item {...producto} />
      ))}
    </>
  );
};

export default ItemList;