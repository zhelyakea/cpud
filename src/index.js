import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import Root from "./components/Root";
import App from "./components/App";

const history = syncHistoryWithStore(hashHistory, store);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
        <IndexRoute component={App} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
