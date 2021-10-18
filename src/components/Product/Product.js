import React, { useContext } from "react";
import "./Product.css";
import ItemCount from "../ItemCount/ItemCount";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";

const Product = (props) => {
  const { products, addProduct } = useContext(CartContext);
  const addToCart = () => {
    console.log("productos desde contexto: ", products);
    addProduct(props);
  };

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
        <button className="btn-buy" onClick={addToCart}>
          Comprar
        </button>
        <NavLink activeClassName="" to={`/producto/${props}`}>
          <button className="btn-more">Ver Más</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
