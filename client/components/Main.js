import { Switch, Route } from 'react-router-dom';
import React from 'react';

import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import HomePage from './HomePage/HomePage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/signin" component={SignInPage} />
    </Switch>
  </main>
);

export default Main;
