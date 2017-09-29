import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignUpForm from './SignUpForm';
import './signUpForm.css';

class SignUpPage extends React.PureComponent {
  render() {
    const {
      userSignUpRequest,
      isUserExists,
    } = this.props;

    return (<div className="row">
      <div className={'form-wrapper'}>
        <SignUpForm
          isUserExists={isUserExists}
          userSignUpRequest={userSignUpRequest}
        />
      </div>
    </div>);
  }
}

SignUpPage.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired,
};

export default SignUpPage;
