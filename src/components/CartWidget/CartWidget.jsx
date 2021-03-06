import React from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./CartWidget.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  const { carQuantity } = useContext(CartContext);

  return (
    <Link to="/cart">
    <div className="container-cartIcon">

        <button type="button" className="btn btn-success position-relative">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {carQuantity}
            </span>
        </button>
    </div>
</Link>
    );
  }

export default CartWidget;