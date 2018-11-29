/**
 * Create a TODO list app
 * Your input and form should be controlled. This means when the user types text in the textbox,
 * it should be stored in state.
 * When the user clicks on the "Add" button, it should be placed in the TODO list below with the
 * "ListItem" component.
 * When the user clicks on the "X" in the ListItem, it should be deleted from the TODO list
 */

import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";

class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <header className="App-header">
          <h1>Todo List</h1>
          <form className="form-group">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter text"
                aria-label="Enter text"
                aria-describedby="button-add"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="subimit"
                  id="button-add"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </header>
        <ul className="list-group">{/* Put ListItems in here */}</ul>
      </div>
    );
  }
}

export default App;
