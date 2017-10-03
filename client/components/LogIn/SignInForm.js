import React from 'react';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';

export default class SignInForm extends React.Component {
  state = {
    identifier: '',
    password: '',
    errors: {},
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signInRequest(this.state);
  }

  render() {
    const { errors } = this.state;

    return (<div className="bd-example">
      <h1>YEEEEEE!</h1>
      <form onSubmit={this.onSubmit}>
        <TextFieldGroup
          error={errors.username}
          label="Username or email"
          onChange={this.onChange}
          value={this.state.identifier}
          field="identifier"
        />
        <TextFieldGroup
          error={errors.password}
          label="Password"
          onChange={this.onChange}
          value={this.state.password}
          field="password"
          type="password"
        />
        <button
          className="btn btn-primary btn-lg"
        >Sign In</button>
      </form>
    </div>);
  }
}
