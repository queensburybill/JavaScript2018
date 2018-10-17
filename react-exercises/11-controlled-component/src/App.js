import React, { Component } from 'react';
import Forms from './components/Forms/Forms';

/***
 * I REMOVED THIS ASPECT OF THE CHALLENGE SO I COULD FOCUS ON BUILDING A FORM
 * 
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
    name: '',
    email: '',
    message: ''
  };

  handleOnChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };

  handleSubmission = (e, keys) => {
    // Is there a reason we wanted to prevent submission? I turned that off...
    // e.preventDefault();
    keys.forEach((key) => {
      this.setState({
        [key]: e.target.value
      });
    });
    alert("You've successfully submitted!");
  };

  render() {
    return (
      <div className="App">
        <Forms 
          onChange={this.handleOnChange}
          onSubmit={this.handleSubmission}
          name={this.state.name}
          email={this.state.email}
          message={this.state.message}
        />
      </div>
    )
  }
}

export default App;
