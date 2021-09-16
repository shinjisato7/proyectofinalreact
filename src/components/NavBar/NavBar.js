import logo from "../../assets/logo.png";
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
              <Button color="inherit">Inicio</Button>
            </li>
            <li>
              <Button color="inherit">Productos</Button>
            </li>
            <li>
              <Button color="inherit">Preguntas</Button>
            </li>
            <li>
              <Button color="inherit">Donde estamos</Button>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default NavBar;
