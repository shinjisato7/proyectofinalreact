import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  //   const [total, setTotal] = useState(0);
  //   const [price, setPrice] = useState(0);

  //   useEffect(() => {
  //     setTotal(handleTotal());
  //     setPrice(handleTotalPrice());
  //   }, [cartItems]);

  const addItem = (item, count) => {
    let cartElement = { item, count };
    let cartAux = [];
    if (isInCart(item)) {
      cartElement = cartItems.find((element) => element.item.id === item.id);
      cartElement.count = cartElement.count + count;
      cartAux = [...cartItems];
    } else {
      cartAux = [cartElement, ...cartItems];
    }
    setCartItems(cartAux);
  };

  const isInCart = (item) => {
    return cartItems && cartItems.some((element) => element.item.id === item.id);
  };

  const datas = {};

  return <CartContext.Provider value={datas}>{children}</CartContext.Provider>;
};
export { CartContextProvider };
export default CartContext;
