import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

// styles
import 'assets/css/bootstrap.min.css';
import 'assets/scss/paper-kit.scss';

// pages
import {
  Landing,
  Checkout,
  Terms,
  DataPolicy,
  PayStatus,
  Admin,
  ProviderForm,
} from 'views';

// .evn
require('dotenv-flow').config();

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route
            path="/provider"
            render={(props) => <ProviderForm {...props} />}
          />
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
      </Provider>
    </BrowserRouter>
  );
};

export default App;
