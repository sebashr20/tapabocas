import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import GlobalState from 'context/GlobalState';

// styles
import 'assets/css/bootstrap.min.css';
import 'assets/scss/paper-kit.scss';

// pages
import { Landing, Checkout, Terms, DataPolicy, PayStatus, Admin } from 'views';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalState>
        <Switch>
          <Route path="/terminos" render={(props) => <Terms {...props} />} />
          <Route
            path="/privacidad"
            render={(props) => <DataPolicy {...props} />}
          />
          <Route path="/admin" render={(props) => <Admin {...props} />} />
          <Route
            path="/checkout/status"
            render={(props) => <PayStatus {...props} />}
          />
          <Route path="/checkout" render={(props) => <Checkout {...props} />} />
          <Route path="/" render={(props) => <Landing {...props} />} />
          <Redirect to="/" />
        </Switch>
      </GlobalState>
    </BrowserRouter>
  );
};

export default App;
