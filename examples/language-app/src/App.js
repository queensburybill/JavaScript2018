import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Languagemodal from './components/language-modal/languagemodal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Navbar from './components/Navbar/Navigation';
import WordList from './components/WordList/WordLst';
import HttpError from './components/Error/Error';

class App extends Component {
  state = {
    location: 'WordsOfDay',
    translation: null,
    loading: false,
    isError: false
  };
  handleLocationChange = location => {
    this.setState(
      {
        location
      },
      () => this.state.location === 'WordsOfDay' && this.getWordOfTheDay()
    );
  };

  getWordOfTheDay = () => {
    this.setState({
      loading: true
    });
    axios
      .get(`http://13.58.93.53:8080/Random`)
      .then(response => {
        this.setState({
          translation: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          isError: true
        });
      });
  };
  componentDidMount() {
    console.log('componentDidMount');
    this.getWordOfTheDay();
  }

  render() {
    const { location, translation, loading, isError } = this.state;
    return !isError ? (
      <div>
        <Navbar handleLocationChange={this.handleLocationChange} />
        <div className="App">
          {loading ? (
            'Loading'
          ) : location === 'Translation' ? (
            <Languagemodal isLoading={loading} />
          ) : location === 'WordsOfDay' ? (
            translation && (
              <ReactCSSTransitionGroup
                transitionName="item"
                transitionEnterTimeout={400}
                transitionLeaveTimeout={400}
              >
                <WordList list={translation} />
              </ReactCSSTransitionGroup>
            )
          ) : (
            <div className="home-container">
              <p>Good Evening</p>
            </div>
          )}
        </div>
      </div>
    ) : (
      <HttpError />
    );
  }
}

export default App;
