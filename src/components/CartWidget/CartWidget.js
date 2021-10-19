import React, { useContext, useEffect, useState } from "react";
import "./CartWidget.css";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
//Materil ui

export default function CartWidget({ show, close }) {
  const { products } = useContext(CartContext);
  const [productos, setProductos] = useState(products);

  useEffect(() => {
    setProductos(products);
    console.log("useEffect");
  }, [products]);

  console.log("productos cartWidget: ", products);

  return (
    <div className={`cart-widget ${show ? "active" : ""}`}>
      <div className="cart-widget_title">
        <h4> Carrito de compras </h4>
        <button onClick={close}>///closeicon</button>
      </div>
      {products.map((product) => {
        return <ItemCart />;
      })}
    </div>
  );
}
