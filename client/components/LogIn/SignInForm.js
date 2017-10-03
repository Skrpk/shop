import React from 'react';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';

export default class SignInForm extends React.Component {
  state = {
    username: '',
    password: '',
    errors: {},
  }

  onChange = (e) => {
    this.setState({ [e.taget.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (<div className="bd-example">
      <h1>YEEEEEE!</h1>
      <form>
        <TextFieldGroup
          error={errors.username}
          label="Username"
          onChange={this.onChange}
          value={this.state.username}
          field="username"
        />
        <TextFieldGroup
          error={errors.username}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
        />
        <button
          className="btn btn-primary btn-lg"
        >Sign In</button>
      </form>
    </div>);
  }
}
