import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/Homepage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsGeneral from "../pages/ProductsGeneral";
import NavBar from "../components/NavBar/NavBar";
import ProductDetailPage from "../pages/ProductDetailPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/contact" component={ContactPage}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/productdetail" component={ProductDetailPage}></Route>
        <Route exact path="/productsgeneral" component={ProductsGeneral}></Route>
        <Route patch="*" component={NotFoundPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}
