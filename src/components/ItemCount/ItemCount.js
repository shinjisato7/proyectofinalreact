import React, { useState } from "react";

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
    <div>
      <button disable={disableButton} onClick={onSubstract}>
        -
      </button>
      {items}
      <button disable={disableButton} onClick={onAdd}>
        +
      </button>
      <button onClick={() => setCount(count + 1)}> Comprar </button>
    </div>
  );
}
