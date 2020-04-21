import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Container/App";
import Details from "./Container/Details";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./Store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/info/:id" component={Details} />
      </Switch>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
serviceWorker.unregister();
