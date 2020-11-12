import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductsGallery from "./pages/ProductsGallery";
import Cart from "./components/Cart";
import GetProduct from "./pages/GetProduct";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => {}} />
        <Route path="/products" exact component={ProductsGallery} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/GetProduct" exact component={GetProduct} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
