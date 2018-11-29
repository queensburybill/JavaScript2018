import React, { Component } from "react";
import DiceRollerContainer from "./DiceRoller/DiceRollerContainer";
import CounterContainer from "./Counter/CounterContainer";
import TodoContainer from "./Todo/TodoContainer";

class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <DiceRollerContainer />
        <CounterContainer />
        <TodoContainer />
      </div>
    );
  }
}

export default App;
