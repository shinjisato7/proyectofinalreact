import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import { data } from "../../data/data";

// import Images from "../Images/Images";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    getProducts.then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className="container-general">
      {products.length !== 0 ? (
        products.map((product) => {
          return <Product key={product.id} image={product.img} category={product.category} title={product.title} price={product.price} />;
        })
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
}
