import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductsGallery from "./pages/ProductsGallery";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProductsGallery} />
        <Route path="/products" exact component={() => {}} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
