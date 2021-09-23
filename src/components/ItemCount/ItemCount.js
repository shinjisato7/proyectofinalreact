import React, { useState } from "react";

export default function ItemCount() {
  const [items, setItems] = useState(0);
  const [stock, setStock] = useState(10);
  const [disableButton, setDisableButton] = useState(false);

  const sumar = () => {
    if (items < stock) {
      setItems(items + 1);
    } else {
      setDisableButton(true);
    }
  };
  const restar = () => {
    setItems(items - 1);
  };

  return (
    <div>
      <button onClick={restar}>-</button>
      {items}
      <button disable={disableButton} onClick={sumar}>
        +
      </button>
    </div>
  );
}
