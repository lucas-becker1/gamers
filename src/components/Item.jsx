import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, description, price, stock, imgUrl, category }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <div
          className="top"
          style={{ backgroundImage: `url("${imgUrl}")` }}
        ></div>
        <div className="bottom">
          <div className="left">
            <div className="details">
              <h1>{name}</h1>
              <p>${price}</p>
            </div>
            <Link to={`/detail/${id}`} className="buy">
              Mas Detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;