import React, { Component } from "react";
import Forms from "./components/Forms/Forms";

/***
 *    1) Use defaultProps to set the intital state of the Application.
 *       defaultProps should have a property called casing and value of UpperCase or LowerCase to determine the state
 *       of userInput. For example, setting defaultProps to LowerCase results in the user's input to be lower case.
 *
 *
 *
 *   2) Import the Forms component from the component directory and then pass the event handlers handleSubmission and handleOnChange functions
 *      to the child component Forms. Use event.preventDefault  to prevent the form from submitting in the handleSubmission function.
 *      In handleOnChange use defaultProps to determine the casing that will be rendered to the screen.
 *
 *
 *
 * */

class App extends Component {
  state = {
    userInput: ""
  };

  handleSubmission = e => {
    e.preventDefault();
  };

  handleOnChange = userInput => {
    this.setState({
      userInput:
        this.props.casing === "LowerCase"
          ? userInput.toLowerCase()
          : userInput.toUpperCase()
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.userInput}
        <Forms
          onSubmit={this.handleSubmission}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

App.defaultProps = {
  casing: "LowerCase"
};

export default App;
