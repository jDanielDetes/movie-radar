import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import MoviePage from './views/MoviePage'
import MyProvider from './api/movieProvider'


var hist = createBrowserHistory();

ReactDOM.render(
  <MyProvider>
  <Router  history={hist}>
  <Switch>
  <Route path="/" component={MoviePage} />
  </Switch>
  </Router>
  </MyProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
