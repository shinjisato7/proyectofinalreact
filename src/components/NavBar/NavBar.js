import logo from "../../assets/logo.png";
import cartLogo from "../../assets/icons8-shopping-cart-50.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
//external
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const NavBar = (props) => {
  return (
    <header>
      <AppBar position={props.fixed ? "fixed" : "static"} className={`main-navbar ${props.fixed ? "navbar-scroll" : ""}`}>
        <Toolbar>
          <Typography variant="h6">
            <div className="container-logo">
              <img src={logo} alt={"logo pagina web"} />
            </div>
          </Typography>
          <ul className="navbar-list">
            <li>
              <Link to="/">
                <Button color="inherit">Home</Button>
              </Link>
            </li>
            <li>
              <Link to="/productsgeneral">
                <Button color="inherit">Productos</Button>
              </Link>
            </li>
            <li>
              <Link to="/productdetail">
                <Button color="inherit">Eventos</Button>
              </Link>
            </li>
            <li>
              <Button color="inherit">Nosotros</Button>
            </li>
            <li>
              <Link to="/contact">
                <Button color="inherit">Contáctanos</Button>
              </Link>
            </li>
            <li className="cart-buttonNav">
              <Button color="inherit">
                <img className="cartLogo" src={cartLogo} alt={"logo pagina web"} />
                <span>0</span>
              </Button>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default NavBar;
