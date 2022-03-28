import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({
  id,
  name,
  description,
  price,
  stock,
  imgUrl,
  categoryId,
}) => {
  return (
    <div className="card">
      <div className="item">
        <div className="text">
          <h1>{name}</h1>
          <span id="price1">${price}</span>
          <img src={imgUrl} />
        </div>
      </div>
      <div className="item">
        <p>{description}</p>
        <div className="stock">En Stock</div>
        <ItemCount stock={stock} />
        <div>
          <button id="cart">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;