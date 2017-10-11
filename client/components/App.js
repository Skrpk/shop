import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import FlashMessagesList from './flash';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FlashMessagesList />
        <Main />
      </div>
    );
  }
}

export default App;
