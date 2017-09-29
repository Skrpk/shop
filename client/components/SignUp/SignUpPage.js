import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignUpForm from './SignUpForm';

class SignUpPage extends React.PureComponent {
  render() {
    const {
      userSignUpRequest,
      isUserExists,
    } = this.props;

    return (<div className="row">
      <div className="col-md-4 col-md-offset-4">
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

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
