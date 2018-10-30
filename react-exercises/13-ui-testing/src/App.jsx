import React, { Component } from 'react';
import Links from './components/Links/Links';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    links: [
      {
        text: 'Running and Writing UI Tests Inside this Starter Kit',
        href: 'https://facebook.github.io/create-react-app/docs/running-tests'
      },
      {
        text: 'UI Testing with Enzyme',
        href: 'https://airbnb.io/enzyme/docs/api/'
      }
    ],
    isHiding: false,
    userInput: ''
  };
  addLink = () => {
    const { links, userInput } = this.state;
    let userCreatedLink = {
      text: userInput,
      href: 'https://airbnb.io/enzyme/docs/api/'
    };

    let newLink = [...links, userCreatedLink];

    this.setState({
      links: newLink
    });
  };

  removeLinks = () => {
    //Enter code to remove links
  };

  hideLinks = () => {
    this.setState({
      isHiding: !this.state.isHiding
    });
  };

  onChangeText = userInput => {
    this.setState({
      userInput
    });
  };

  render() {
    const { links, isHiding } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h2>Welcome Links Center</h2>
          {!isHiding && <Links links={links} />}

          <input
            type="text"
            placeholder="Enter Link"
            onChange={e => this.setState({ userInput: e.target.value })}
          />
          <button onClick={this.addLink}>Add a Link</button>
          <button onClick={this.hideLinks}>Hide Links</button>
        </header>
      </div>
    );
  }
}

export default App;
