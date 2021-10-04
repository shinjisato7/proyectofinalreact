import React from "react";
import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail(props) {
  return (
    //jsx
    <div className="container-detail-item">
      <div className="detail-item">
        {console.log("Detalle producto data", props.data)}
        <div className="detail-img">
          <img src={`./assets/${props.data.img}`} />
        </div>
        <div className="detail-text">
          <h4>{props.data.title}</h4>

          <p>$ {props.data.price}</p>
          <ItemCount />
        </div>
      </div>
    </div>
  );
}
export default ItemDetail;
