import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import HomePage from './components/HomePage/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/signup" component={SignUpPage} />
    <Route path="/signin" component={SignInPage} />
  </Route>
);
