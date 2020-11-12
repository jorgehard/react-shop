import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductsGallery from "./pages/ProductsGallery";
import GetProduct from "./pages/GetProduct";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProductsGallery} />
        <Route path="/products" exact component={() => {}} />
        <Route path="/Getproduct" exact component={GetProduct} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
