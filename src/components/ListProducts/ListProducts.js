import React from "react";
import Product from "../Product/Product";

export default class ListProducts extends React.Component {
  render() {
    return (
      <div>
        <Product title="Daruma Rojo" price="250" />
        <Product title="Daruma Rojo" price="250" />
        <Product title="Daruma Rojo" price="250" />
        <Product title="Daruma Rojo" price="250" />
      </div>
    );
  }
}
