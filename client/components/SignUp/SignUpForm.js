import React from 'react';

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
            label="Username"
            onChange={this.onChange}
            checkUserExists={this.checkUserExists}
            value={this.state.email}
            field="email"
          />
          <TextFieldGroup
            error={errors.password}
            label="Username"
            onChange={this.onChange}
            value={this.state.password}
            field="password"
          />
          <TextFieldGroup
            error={errors.passwordConfirmation}
            label="Username"
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            field="passwordConfirmation"
          />

          <div className="form-group">
            <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
