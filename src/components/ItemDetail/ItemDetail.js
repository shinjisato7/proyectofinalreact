import React, { useState, useEffect, useContext } from "react";
import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";

function ItemDetail(props) {
  const [items, setItems] = useState(0);
  const [stock, setStock] = useState(10);

  const onAdd = () => {
    if (items < stock) {
      setItems(items + 1);
    } else {
      console.log(2);
    }
  };
  const onSubstract = () => {
    if (items > 0) {
      setItems(items - 1);
    } else {
      console.log(2);
    }
  };

  return (
    //jsx
    <div className="container-detail-item">
      <div className="detail-item">
        {console.log("Detalle producto data", props.data)}
        <div className="detail-img">
          <img src={`./assets/${props.data.img.img}`} />
        </div>
        <div className="detail-text">
          <h4>{props.data.title}</h4>

          <p>$ {props.data.price}</p>
          <ItemCount onSubstract={onSubstract} onAdd={onAdd} quantity={items} />
          <NavLink to="/cart">
            <button className="btn-buy">Agregar al Carrito </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default ItemDetail;
