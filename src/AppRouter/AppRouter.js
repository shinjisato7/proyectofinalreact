import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListProducts from "../components/ListProducts/ListProducts";
import HomePage from "../pages/Homepage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";
import ItemDetail from "../components/ItemDetail/ItemDetail";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/contacto" component={ContactPage}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/itemdetail" component={ItemDetail}></Route>
        <Route exact path="/listproducts" component={ListProducts}></Route>
        <Route patch="*" component={NotFoundPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}
