<<<<<<< HEAD
import React, { Component } from 'react';
import Links from './components/Links/Links';
import './App.css';
=======
import React, { Component } from "react";
import Links from "./components/Links/Links";
import logo from "./logo.svg";
import "./App.css";
>>>>>>> b25a044af835b5dcd78c6655095b2e6942e0ab13

class App extends Component {
  state = {
    links: [
      {
        text: "Running and Writing UI Tests Inside this Starter Kit",
        href: "https://facebook.github.io/create-react-app/docs/running-tests"
      },
      {
        text: "UI Testing with Enzyme",
        href: "https://airbnb.io/enzyme/docs/api/"
      }
    ],
    isHiding: false,
<<<<<<< HEAD
    userInput1: '',
    userInput2: ''
=======
    userInput: ""
>>>>>>> b25a044af835b5dcd78c6655095b2e6942e0ab13
  };

  addLink = (e) => {
    e.preventDefault();
    const { links, userInput1, userInput2 } = this.state;
    let userCreatedLink = {
<<<<<<< HEAD
      text: userInput1,
      href: userInput2
    }
=======
      text: userInput,
      href: "https://airbnb.io/enzyme/docs/api/"
    };
>>>>>>> b25a044af835b5dcd78c6655095b2e6942e0ab13

    let newLinks = [...links, userCreatedLink];

    this.setState({
      links: newLinks,
      userInput1: '',
      userInput2: ''
    });
  }

  hideLinks = () => {
    this.setState({
      isHiding: !this.state.isHiding
    });
  }

  handleInputChange = (e, inputKey) => {
    this.setState({
      [inputKey]: e.target.value
    });
  }

  render() {
    const { links, isHiding } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h2>Welcome Links Center</h2>
          {!isHiding && <Links links={links} />}
          <form onSubmit={e => this.addLink(e)}>
            <input
              type="text"
              placeholder="Enter Link"
              value={this.state.userInput1}
              onChange={e => this.handleInputChange(e, "userInput1")}
            />
            <input
              type="text"
              placeholder="Enter URL"
              value={this.state.userInput2}
              onChange={e => this.handleInputChange(e, "userInput2")}
            />
            <button type='submit'>Add a Link</button>
          </form>
          <br></br>
          <button onClick={this.hideLinks}>Hide Links</button>
        </header>
      </div>
    );
  }
}

export default App;
