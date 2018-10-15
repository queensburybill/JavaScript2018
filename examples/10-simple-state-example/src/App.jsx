/**
 * This is a simple example of state and events in React
 * When you click on a logo, it disappears
 */

import React, { Component } from "react";
import logo from "./logo.svg";

const logos = {
  0: {
    isVisible: true
  },
  1: {
    isVisible: true
  },
  2: {
    isVisible: true
  }
};

class App extends Component {
  state = logos;
  hideJewel = index => {
    let newState = Object.assign(this.state);
    newState[index].isVisible = false;
    this.setState(newState);
  };
  render() {
    return (
      <div className="App">
        {Object.values(this.state).map((logoObj, index) => {
          const key = "jewel-" + index;
          return logoObj.isVisible ? (
            <img
              src={logo}
              alt=""
              width="200"
              height="142"
              key={key}
              onClick={() => this.hideJewel(index)}
            />
          ) : null;
        })}
      </div>
    );
  }
}

export default App;
