import React from "react";
import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(props) {
  return (
    //jsx
    <div className="detail-item">
      {console.log("Detalle producto data", props.data)}
      <div className="detail-img">
        <img src={`./assets/${props.data.img}`} />
      </div>
      <div className="detail-text">
        <h1>{props.data.title}</h1>

        <h3>$ {props.data.price}</h3>
        <ItemCount />
      </div>
    </div>
  );
}
export default ItemDetail;
