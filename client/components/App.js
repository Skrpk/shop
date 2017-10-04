import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import FlashMessagesList from './flash';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FlashMessagesList />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
