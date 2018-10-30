import React, { Component } from 'react';
import './languagemodal.css';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import axios from 'axios';
class Languagemodal extends Component {
  state = {
    userInput: null,
    translation: null,
    isTranslationLoading: false
  };
  getTranslation = () => {
    const { userInput } = this.state;
    this.setState({
      isTranslationLoading: true
    });
    axios
      .get(`http://13.58.93.53:8080/translation/${userInput}`)
      .then(response => {
        this.setState({
          translation: response.data.data.data,
          isTranslationLoading: false
        });
      });
  };
  render() {
    const { translation, isTranslationLoading } = this.state;

    return (
      <div className="language-container">
        <div className="English">
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>English</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Enter Text"
              onChange={e => this.setState({ userInput: e.target.value })}
            />
            <button onClick={() => this.getTranslation()}>Submit</button>
          </FormGroup>
        </div>
        <span className="vertical" />
        <div className="Japanese">
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Japanese</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Translation"
              value={
                !isTranslationLoading
                  ? translation &&
                    translation[0].japanese[0].reading +
                      '\n' +
                      translation[0].japanese[0].word
                  : 'loading'
              }
              disabled
            />
          </FormGroup>
        </div>
      </div>
    );
  }
}

export default Languagemodal;
