import React, { Component } from "react";
import CounterContainer from "./Counter/CounterContainer";
import TodoContainer from "./Todo/TodoContainer";

class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <CounterContainer />
        <TodoContainer />
      </div>
    );
  }
}

export default App;
