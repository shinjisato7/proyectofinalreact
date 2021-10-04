import React, { useState } from "react";
import "../ItemCount/ItemCount.css";

export default function ItemCount() {
  const [items, setItems] = useState(0);
  const [stock, setStock] = useState(10);
  const [disableButton, setDisableButton] = useState(false);
  const [count, setCount] = useState(0);

  const onAdd = () => {
    if (items < stock) {
      setItems(items + 1);
    } else {
      setDisableButton(true);
    }
  };
  const onSubstract = () => {
    if (items > 0) {
      setItems(items - 1);
    } else {
      setDisableButton(true);
    }
  };

  return (
    <div className="container-itemcount">
      <button className="btn-resta" disable={disableButton} onClick={onSubstract}>
        -
      </button>
      {items}
      <button className="btn-suma" disable={disableButton} onClick={onAdd}>
        +
      </button>
      <br />
      <button className="btn-buy" onClick={() => setCount(count + 1)}>
        Comprar
      </button>
    </div>
  );
}
