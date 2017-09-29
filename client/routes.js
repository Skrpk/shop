import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Header from './components/Header';
import SignUpPage from './components/SignUp';
import HomePage from './components/HomePage/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/signup" component={SignUpPage} />
  </Route>
);
