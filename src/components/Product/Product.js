import React from "react";
import "./Product.css";
import ItemCount from "../ItemCount/ItemCount";

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
      </div>
    </div>
  );
};

export default Product;
