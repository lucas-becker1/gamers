import React, { createContext, useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [carQuantity, setCarQuantity] = useState(0);

  const agregarAlCarrito = (item, quantity) => {
    //   const itemInCart = cart.some((order) => order.item.id === item.id);
    //   if (itemInCart) {
    //     const updateCart = cart.map((order) => {
    //       setCarQuantity(carQuantity + quantity);
    //       if (order.item.id === item.id) {
    //         return { ...order, quantity: quantity + order };
    //       } else {
    //         return order;
    //       }
    //     });
    //     setCart(updateCart);
    //   } else {
    //     setCart((prevState) => [...prevState, { item, quantity }]);
    //   }
    // };
    if (isInCart(item.id)) {
      const indexActualizar = cart.findIndex(
        (order) => order.item.id === item.id
      );
      cart[indexActualizar].quantity =
        cart[indexActualizar].quantity + quantity;
      setCarQuantity(carQuantity + quantity);
      Swal.fire(`Agregaste ${item.tittle} al carrito, cantidad: ${quantity}.`);
    } else {
      Swal.fire(`Agregaste ${item.tittle} al carrito, cantidad: ${quantity}.`);
      const nuevoCarrito = {
        item: item,
        quantity: quantity,
      };
      setCart([...cart, nuevoCarrito]);
    }
  };

  const stockCart = () => {
    return cart.reduce((acc, order) => acc + order.stock, 0);
  };

  const totalCart = () => {
    return cart
      .map((item) => item.quantity * item.price)
      .reduce((pv, cv) => pv + cv, 0);
  };
  //   return cart.reduce(
  //     (todo, item) => (todo = todo + item.item.precio + item.item.quantity),
  //     0
  //   );
  // };

  const vaciarCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.item.id === id);
  };

  // const eliminarItem = (id) => {
  //   setCart(cart.filter((product) => product.id !== id));
  // };

  const eliminarItem = (id) => {
    const carritoActualizado = cart.filter((product) => product.item.id !== id);
    setCart(carritoActualizado);
  };

  useEffect(() => {
    if (cart.length > 0) {
      let stock = 0;
      cart.forEach((item) => (stock = stock + item.quantity));
      setCarQuantity(stock);
    } else {
      setCarQuantity(0);
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        carQuantity,
        setCarQuantity,
        agregarAlCarrito,
        stockCart,
        isInCart,
        totalCart,
        vaciarCart,
        eliminarItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);