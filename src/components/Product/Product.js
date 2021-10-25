import React, { useState, useEffect } from "react";
import "./Product.css";
import ItemCount from "../ItemCount/ItemCount";
import { NavLink } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="container">
      <div className="container-product">
        <div className="container-img-product">
          <img src={props.image.img} alt={props.image.name}></img>
        </div>
        <div className="container-product-data">
          <h3>{props.title}</h3>
          <p>$ {props.price}</p>
          <ItemCount />
        </div>
        <NavLink to="/cart">
          <button className="btn-buy">Comprar</button>
        </NavLink>

        <NavLink activeClassName="" to={`/producto/${props}`}>
          <button className="btn-more">Ver Más</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
