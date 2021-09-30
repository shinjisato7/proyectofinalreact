import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [detailProducts, setDetailProducts] = useState();

  const getProduct = new Promise((resolve) => {
    setTimeout(() => {
      const mockProduct = {
        id: "1",
        title: "Daruma Rojo",
        img: "daruma-rojo.png",
        price: "250",
        description: "Rojo",
        stock: 20,
      };
      resolve(mockProduct);
    }, 2000);
  });

  useEffect(() => {
    getProduct.then((response) => {
      setDetailProducts(response);
    });
  }, []);

  return (
    <div>
      {console.log("detailProduct: ", detailProducts)}
      <ItemDetail data={detailProducts} />
    </div>
  );
}
export default ItemDetailContainer;
