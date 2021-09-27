import React from "react";
import "./Product.css";
import ItemCount from "../ItemCount/ItemCount";

const Product = (props) => {
  return (
    <div className="container-product">
      <div className="container-img-product">
        <img src={`./assets/${props.image}`} alt="darumas"></img>
      </div>
      <div className="container-product-data">
        <h3>{props.title}</h3>
        <p>$ {props.price}</p>
        <ItemCount />
      </div>
    </div>
  );
};

export default Product;
