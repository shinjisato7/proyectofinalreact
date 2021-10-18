import { Button } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "mui/icons-material/Delete";

export default function ItemCart() {
  return (
    <div className="cart-widget_product" key={`item-${product.id}`}>
      <div classNAme="container-img">
        <img src={`../assets/${product.image}`} alt="" />
      </div>
      <div className="container-data">
        <p className="container-data_title">{product.title}</p>
        <p className="container-price">$ {product.price}</p>
      </div>
      <div className="container-actions">
        <Button>
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
}
