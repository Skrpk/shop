import React from 'react';
import PropTypes from 'prop-types';

import SignInForm from './SignInForm';

class SignInPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="form-wrapper">
          <SignInForm
            signInRequest={this.props.signInRequest}
          />
        </div>
      </div>
    );
  }
}

SignInPage.propTypes = {
  signInRequest: PropTypes.func.isRequired,
}

export default SignInPage;
