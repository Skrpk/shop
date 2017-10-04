import React from 'react';
import PropTypes from 'prop-types';

import FlashMessage from './FlashMessage';
import './flashMessagesList.css';

class FlashMessagesList extends React.Component {
  renderMessages = () =>
    this.props.messages.map(element =>
      (<FlashMessage
        key={element.id}
        message={element}
        deleteFlashMessage={this.props.deleteFlashMessage}
      />)
    )

  render() {
    return (
      <div className="wrapper">
        {this.renderMessages()}
      </div>
    );
  }
}

FlashMessagesList.propTypes = {
  deleteFlashMessage: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
};

export default FlashMessagesList;
