import logo from "../../assets/logo.png";
import cartLogo from "../../assets/icons8-shopping-cart-50.png";
import "./NavBar.css";
//external
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const NavBar = () => {
  return (
    <header className="main-navbar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <div className="container-logo">
              <img src={logo} alt={"logo pagina web"} />
            </div>
          </Typography>
          <ul className="navbar-list">
            <li>
              <Button color="inherit">Home</Button>
            </li>
            <li>
              <Button color="inherit">Productos</Button>
            </li>
            <li>
              <Button color="inherit">Eventos</Button>
            </li>
            <li>
              <Button color="inherit">Nosotros</Button>
            </li>
            <li>
              <Button color="inherit">Contáctanos</Button>
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
