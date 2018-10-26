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
    lat: "",
    long: "",
    // location: ["42.9694", "-74.1224"],
    weather: null,
    loading: false,
    isError: false
  }

  // getWeather = (location) => {
  //   this.setState({
  //     loading: true
  //   });
  //   axios
  //     .get('http://dev.mydbc.co/demo/api.php?lat=' + this.state.location[0] + '&long=' + this.state.location[1])
  //     .then(response => {
  //       console.log(response.data.currently);
  //       this.setState({
  //         loading: false
  //       });
  //       return response.data.currently;
  //     })
  //     .catch(error => {
  //       this.setState({
  //         isError: true
  //       });
  //     });
  // }

  getLocation = () => {
    this.setState({
      loading: true
    });
    axios
      .get('http://dev.mydbc.co/demo/latlong.php')
      .then(response => {
        console.log(response.data);
        this.setState({
          lat: response.data.lat,
          long: response.data.long
        });
      })
      .catch(error => {
        this.setState({
          isError: true
        });
      })
      // .get('http://dev.mydbc.co/demo/api.php?lat=' + this.state.lat + '&long=' + this.state.long)
      .get('http://dev.mydbc.co/demo/api.php?lat=42.9694&long=-74.1224')
      .then(response => {
        console.log(response.data.currently);
        this.setState({
          weather: response.data.currently,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          isError: true
        });
      });
  }

  componentDidMount = () => {
    this.getWeather(() => this.getLocation());
  }


  render() {
    console.log(this.state.lat);
    return (
      <div className="card">
        <div className="card-section">
            {this.state.loading ? ( 
              <div className="container">
                <h2>Loading</h2>
              </div>) : (
              <div className="container">
                <h3>New York, NY</h3>
                <p>
                  {this.state.weather.summary}
                  <br />
                  {this.state.weather.temperature + "&deg;F"}
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
