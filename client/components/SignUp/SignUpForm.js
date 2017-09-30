import React from 'react';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';

class SignUpForm extends React.PureComponent {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: {},
    isLoading: false,
  }

  onChange = () => {
    this.setState({ [e.target.name]: e.target.value });
  }

  checkUserExists = (e) => {
    console.log('checkUserExists');
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.userSignUpRequest(this.state);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="bd-example">
        <h1>What`s up</h1>
        <form>
          <TextFieldGroup
            error={errors.username}
            label="Username"
            onChange={this.onChange}
            checkUserExists={this.checkUserExists}
            value={this.state.username}
            field="username"
          />
          <TextFieldGroup
            error={errors.email}
            label="Email"
            onChange={this.onChange}
            checkUserExists={this.checkUserExists}
            value={this.state.email}
            field="email"
          />
          <TextFieldGroup
            error={errors.password}
            label="Password"
            onChange={this.onChange}
            value={this.state.password}
            field="password"
          />
          <TextFieldGroup
            error={errors.passwordConfirmation}
            label="Password Confirmation"
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            field="passwordConfirmation"
          />

          <div className="form-group">
            <button
              onClick={this.onSubmit}
              disabled={this.state.isLoading}
              className="btn btn-primary btn-lg"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  errors: PropTypes.object.isRequired,
}

export default SignUpForm;
