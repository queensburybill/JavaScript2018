import React, { Component } from "react";

/**
 * https://api.darksky.net/forecast/6111b812232ce4bc2370f18ee3b64134/[latitude],[longitude]
 * As an user, I should be greeted with the temperature, and summary.
 * As an engineer, I should use componentDidMount as well as axios to accomplish the task.
 *
 * You will be performing two AJAX calls:
 * 1.) The first call will return the user's latitude and longitude
 *     API: http://ip-api.com/json
 * 2.) The second call should return detailed weather information for a given latitude and longitude.
 *     Replace [latitude] and [longitude] in the URL below with the results from the first API.
 *     API: http://dev.mydbc.co/demo/api.php?lat=[latitude]&long=[longitude]
 */

class App extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-section">
          <div className="container">
            <h3>New York, NY</h3>
            <p>
              Scattered Showers
              <br />
              Temperature: 65.76&deg;F
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
