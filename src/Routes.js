import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductsGallery from "./pages/ProductsGallery";
import Cart from "./components/Cart";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => {}} />
        <Route path="/products" exact component={ProductsGallery} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
