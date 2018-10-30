import React from 'react';

/**
 * As a user, I should be able to click on a button named Increment to increment the count
 * As a user, I should be able to click on a button named Decrement to decrement the count
 * As a user, I should be able to click on reset to reset the counter
 * As a user, I should not be able to go below 0 on the count
 * if the count goes above 10, the count should not be rendered to the sreen
 */

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  doTheMath = (type) => {
    if(type === "inc") {
      this.setState({ count: this.state.count === 10 ?  10 : ++this.state.count });
    } else if(type === "dec") {
      this.setState({ count :this.state.count === 0 ? 0 : --this.state.count });
    } else if(type === "reset") {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div>
        <button className="inc"
                onClick={() => this.doTheMath("inc")}
        >Increment!</button>
        <button className="dec"
                onClick={() => this.doTheMath("dec")}
        >Decrement!</button>
        <button className="reset"
                onClick={() => this.doTheMath("reset")}
        >Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default App
