import React, { Component } from 'react';
import LoginContainer from '../src/components/Login/LoginContainer';
import BankContainer from '../src/components/Bank/BankContainer';
class App extends Component {
  state = {
    isUserLoggedIn: false
  };

  UserAuthorized = () => {
    this.setState({
      isUserLoggedIn: true
    });
  };

  render() {
    const { isUserLoggedIn } = this.state;
    return !isUserLoggedIn ? (
      <LoginContainer UserAuthorized={this.UserAuthorized} />
    ) : (
      <BankContainer />
    );
  }
}

export default App;
