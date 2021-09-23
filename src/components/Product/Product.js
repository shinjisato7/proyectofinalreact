import React from "react";
// import ProductImg from "../../assets/daruma-rojo.png";
import "./Product.css";
import ItemCount from "../ItemCount/ItemCount";

const Product = (props) => {
  return (
    <div className="container-product">
      <div>
        <img src={props.img} alt=""></img>
      </div>
      <h3>{props.title}</h3>
      <p>$ {props.price}</p>
      <ItemCount />
      <button>Comprar</button>
    </div>
  );
};

export default Product;
