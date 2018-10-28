import React, { Component } from "react";
import Links from "./components/Links/Links";
import logo from "./logo.svg";
import "./App.css";

const links = [
  {
    text: "Running and Writing UI Tests Inside this Starter Kit",
    href: "https://facebook.github.io/create-react-app/docs/running-tests"
  },
  {
    text: "UI Testing with Enzyme",
    href: "https://airbnb.io/enzyme/docs/api/"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Links links={links} />
        </header>
      </div>
    );
  }
}

export default App;
