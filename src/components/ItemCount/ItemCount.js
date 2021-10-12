import "../ItemCount/ItemCount.css";
import React, { useEffect, useState } from "react";

export default function ItemCount(props) {
  return (
    <div className="container-itemcount">
      <div className="btn-sumres">
        <button className="btn-resta" onClick={props.onSubstract}>
          -
        </button>
        <p>{props.quantity}</p>
        <button className="btn-suma" onClick={props.onAdd}>
          +
        </button>
      </div>
    </div>
  );
}
