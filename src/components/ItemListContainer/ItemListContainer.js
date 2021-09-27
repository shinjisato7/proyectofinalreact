import React, { useState, useEffect } from "react";
import Product from "../Product/Product";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      const mockProducts = [
        {
          id: 1,
          title: "Daruma Rojo",
          img: "daruma-rojo.png",
          price: 250,
          description: "Rojo",
          stock: 20,
        },
        {
          id: 2,
          title: "Daruma Azul",
          img: "daruma-azul.png",
          price: 250,
          description: "Rojo",
          stock: 20,
        },
        {
          id: 3,
          title: "Daruma Verde",
          img: "daruma-verde.png",
          price: 250,
          description: "Rojo",
          stock: 20,
        },
        {
          id: 4,
          title: "Daruma Negro",
          img: "daruma-negro.png",
          price: 250,
          description: "Rojo",
          stock: 20,
        },
      ];
      resolve(mockProducts);
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
          return <Product key={product.id} image={product.img} title={product.title} price={product.price} />;
        })
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
}
