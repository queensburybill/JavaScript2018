import React, { Component } from 'react';

import './Login.css';
class Login extends Component {
  state = {
    userInput: ''
  };

  handleOnSubmit(e) {
    console.log(e);
    e.preventDefault();
  }

  handleOnChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (this.props.user !== nextProps.User) {
      this.props.UserAuthorized();
    }
  }

  onUserSubmit = () => {
    const { userInput } = this.state;
    this.props.setUser(userInput);
    this.props.getUser();
  };

  render() {
    console.log(this.props.use);
    return (
      <div className="login-page">
        <div className="form">
          <form className="register-form" onSubmit={e => e.preventDefault()}>
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">
              Already registered? <a href="#">Sign In</a>
            </p>
          </form>
          <form className="login-form" onSubmit={e => this.handleOnSubmit(e)}>
            <input
              type="text"
              placeholder="username"
              onChange={e => this.handleOnChange(e)}
            />
            <input type="password" placeholder="password" />
            <button onClick={this.onUserSubmit}>login</button>
            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
