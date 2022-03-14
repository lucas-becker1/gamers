import React from "react";
import img from "../images/fifa21.jpg";
import ItemCount from "./ItemCount";

function Item({ titulo, precio, initial, stock }) {
  return (
    <div>
      <div className="card">
        <div className="row">
          <div className="col-md-12">
            <div className="card-body">
              <h4 className="card-title">FIFA 21{titulo}</h4>
              <img src={img} alt="fifa 21" width='200' />
              <p className="card-text text-secondary">$8000{precio}</p>
            </div>
            <ItemCount initial={0} stock={10} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;