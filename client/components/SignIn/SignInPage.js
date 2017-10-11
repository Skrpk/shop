import React from 'react';
import PropTypes from 'prop-types';

import SignInForm from './SignInForm';

class SignInPage extends React.Component {
  render() {
    const {
      signInRequest,
      errors,
    } = this.props;

    return (
      <div className="row">
        <div className="form-wrapper">
          <SignInForm
            signInRequest={signInRequest}
            errors={errors}
          />
        </div>
      </div>
    );
  }
}

SignInPage.propTypes = {
  signInRequest: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default SignInPage;
