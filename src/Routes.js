import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Products from "./Products";
import Cart from "./Cart";
import NavigationBar from './components/NavigationBar'

const Routes = () => {
  return (
    <BrowserRouter>
    <NavigationBar index={2} count={2} />
      <Switch>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;