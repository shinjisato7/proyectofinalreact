import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./NavBar.css";
import { Link, NavLink, useParams } from "react-router-dom";
import Cart from "../Cart/Cart";
import { data } from "../../data/data";
//external
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const NavBar = (props) => {
  const [amulets, setAmulets] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    const getAmulets = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    getAmulets.then((res) => {
      catId ? setAmulets(res.filter((i) => i.category === catId)) : setAmulets(res);
    });
  }, [catId]);

  const categories = [
    { id: 1, address: "/productos", text: "Productos" },
    { id: 2, address: "/category/Daruma", text: "Daruma" },
    { id: 3, address: "/category/Omamori", text: "Omamori" },
  ];

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
              <Link className="btn-title-nav" to="/">
                <Button color="inherit">Home</Button>
              </Link>
            </li>
            <li>
              {categories.map((cat) => {
                return (
                  <div className="link-productos" key={cat.id}>
                    <NavLink to={cat.address} exact activeClassName="link-subproductos">
                      {cat.text}
                    </NavLink>
                  </div>
                );
              })}
            </li>
            <li>
              <Link className="btn-title-nav" to="/producto">
                <Button color="inherit">Eventos</Button>
              </Link>
            </li>
            <li>
              <Link className="btn-title-nav" to="">
                <Button color="inherit">Nosotros</Button>
              </Link>
            </li>
            <li>
              <Link className="btn-title-nav" to="/contact">
                <Button color="inherit">Contáctanos</Button>
              </Link>
            </li>
            <li className="cart-buttonNav">
              {/* <Button color="inherit">
                <img className="cartLogo" src={cartLogo} alt={"logo pagina web"} />
                <span>0</span>

              </Button> */}
              <Cart />
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default NavBar;
