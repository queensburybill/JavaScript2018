import React, { Component } from "react";
import axios from "axios";

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
  state = {
    location: "",
    temperature: 0,
    summary: "",
    isLoading: true
  };
  getCoordinates = callback => {
    return axios.get("http://dev.mydbc.co/demo/latlong.php").then(response => {
      if (!response.data.lat || !response.data.lon)
        throw new Error("No response from lat + long");
      callback(response.data.lat, response.data.lon);
      this.setState({ location: response.data.location });
    });
  };
  getWeather = (lat, long) => {
    return axios
      .get(`http://dev.mydbc.co/demo/api.php?lat=${lat}&long=${long}`)
      .then(response => {
        const { temperature, summary } = response.data.currently;
        console.log(response.data);
        this.setState({
          temperature,
          summary,
          isLoading: false
        });
      });
  };
  componentDidMount() {
    this.getCoordinates(this.getWeather);
  }
  render() {
    return (
      <div className="card">
        {this.state.isLoading ? (
          <p>Loading</p>
        ) : (
          <div className="card-section">
            <div className="container">
              <h3>{this.state.location}</h3>
              <p>
                {this.state.summary}
                <br />
                Temperature: {this.state.temperature}
                &deg;F
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
