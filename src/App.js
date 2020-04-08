import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { CartProvider } from "./CartContext";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";

// pages
import { Landing, Checkout } from "views";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Switch>
          <Route path="/checkout" render={(props) => <Checkout {...props} />} />
          <Route path="/" render={(props) => <Landing {...props} />} />
          {/* <Route path="/terminos" render={props => <Terms {...props} />} />
        <Route path="/privacidad" render={props => <DataPolicy {...props} />} /> */}
          <Redirect to="/" />
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
