import React from "react";
import img from "../images/fifa-22.png";
import ItemCount from "./ItemCount";

function Item({ titulo, precio, stock, i }) {
  return (
    <div>
      <div className="card">
        <div className="row">
          <div className="col-md-12">
            <div className="card-body">
              <h4 className="card-title">{titulo}</h4>
              <img src={img} alt="portada juego" width={200}/>
              <p className="card-text text-secondary">Precio: ${precio}</p>
            </div>
            <ItemCount key={i} initial={1} stock={10} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Item;