import React, { useState } from "react";
import "./Cart.css";
import CartWidget from "../CartWidget/CartWidget";
import cartLogo from "../../assets/icons8-shopping-cart-50.png";
//external
import Button from "@material-ui/core/Button";

export default function Cart() {
  const [showCart, setShowCart] = useState(false);
  const handleCart = () => {
    !showCart ? setShowCart(true) : setShowCart(false);
  };

  return (
    <div className="cart-buttonNav">
      <Button variant="outlined" onClick={handleCart} color="inherit">
        <img className="cartLogo" src={cartLogo} alt={"logo pagina web"} />
        <span>0</span>
        <Cart />
      </Button>
      <CartWidget show={showCart} />
    </div>
  );
}
