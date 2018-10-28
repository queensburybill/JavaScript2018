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
 *     NEW: http://dev.mydbc.co/demo/latlong.php
 * 2.) The second call should return detailed weather information for a given latitude and longitude.
 *     Replace [latitude] and [longitude] in the URL below with the results from the first API.
 *     API: http://dev.mydbc.co/demo/api.php?lat=[latitude]&long=[longitude]
 */

class App extends Component {
  state = {
    location: "",
    weather: {},
    loading: true,
    isError: false
  }

  getLocation = (callback) => {
    this.setState({ loading: true });
    axios
      .get('http://dev.mydbc.co/demo/latlong.php')
      .then(response => {
        if(!response.data.lat || !response.data.lon)
          throw new Error("No response from lat * long");
        callback(response.data.lat, response.data.lon);
        this.setState({
          location: response.data.location,
          loading: false  
        });
      })
    .catch(() => {
      this.setState({ isError: true });
    });
  }

  getWeather = (lat, lon) => {
    this.setState({ loading: true });
    axios
      .get(`http://dev.mydbc.co/demo/api.php?lat=${lat}&long=${lon}`)
      .then(response => {
        this.setState({  
          weather: response.data.currently
        });
      })
      .catch(() => {
        this.setState({ isError: true });
      });
  }

  componentDidMount = () => {
    this.getLocation(this.getWeather);
  }


  render() {
    return (
      <div className="card">
        <div className="card-section">
          {this.state.loading  
            ? ( 
            <div className="container">
              <h2>Loading</h2>
            </div> 
            )
            : (
            <div className="container">
              <h3>{this.state.location}</h3>
              <p>
                {this.state.weather.summary}
                <br />
                Temperature: {Math.round(this.state.weather.temperature)}&deg;F
              </p>
            </div> 
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
