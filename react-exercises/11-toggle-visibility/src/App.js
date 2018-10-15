import React, { Component } from 'react';

/***
 *  As a user, I should be able to click on the button to hide the text.
 *  Clicking the button a second try unhides the text.
 *
 */

class App extends Component {
  state = {
    showText: true
  };

  toggleVisibility = () => {};

  render() {
    return (
      <div>
        <div>
          <h1>Now you see me!</h1>
        </div>
        <button>Click To Hide Text</button>
      </div>
    );
  }
}

export default App;
