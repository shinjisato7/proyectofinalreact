import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HomePage from "../pages/Homepage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsGeneral from "../pages/ProductsGeneral";
import NavBar from "../components/NavBar/NavBar";
import ProductDetailPage from "../pages/ProductDetailPage";
import Footer from "../components/Footer/Footer";
import Cart from "../pages/Cart";
import Daruma from "../pages/Daruma";
//context
import { CartProvider } from "../context/CartContext";

export default function AppRouter() {
  const [fixedScroll, setFixedsScroll] = useState(false);

  useEffect(() => {
    function onScrollWindow() {
      if (window.scrollY > 161) {
        setFixedsScroll(true);
      } else {
        setFixedsScroll(false);
      }
    }

    window.addEventListener("scroll", onScrollWindow);
  }, []);

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar fixed={fixedScroll} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/producto/:productId" component={ProductDetailPage} />
          <Route exact path="/productos" component={ProductsGeneral} />
          <Route exact path="/Daruma" component={Daruma} />
          <Route path="/cart" component={Cart} />
          <Route patch="*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}
