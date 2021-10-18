import React, { useContext, useEffect, useState } from "react";
import "./Cartwidget.css";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart.js/ItemCart";
//Materil ui
import CloseIcon from "@mui/icons-material/CLose";
import DeleteIcon from "mui/icons-material/Delete";

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
        <Button onClick={close}>
          <CloseIcon />
        </Button>
      </div>
      {products.map((product) => {
        return <ItemCart />;
      })}
    </div>
  );
}
