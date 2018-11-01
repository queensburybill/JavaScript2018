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
  state = {
    todo: [],
    userInput: ""
  }
  onAddButtonClick = e => {
    e.preventDefault();
    let newTodo = this.state.todo.concat(this.state.userInput);
    this.setState({
      todo: newTodo,
      userInput: ""
    });
  }
  onDeleteButtonClick = (i) => {
    let todo = this.state.todo.filter((_, index) => index !== i);
    this.setState({
      todo,
      userInput: ""
    });
  }
  onChangeHandler = userInput => {
    this.setState({
      userInput
    })  
  }
  render() {
    const todo = this.state.todo;
    return (
      <div className="container mt-4">
        <header className="App-header">
          <h1>Todo List</h1>
          <form 
            className="form-group"
            onSubmit={e => this.onAddButtonClick(e)}
          >
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter text"
                aria-label="Enter text"
                aria-describedby="button-add"
                value={this.state.userInput}
                onChange={e => this.onChangeHandler(e.target.value)}
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
        <ul className="list-group">
          {todo.map((item, i) => {
            return (
              <ListItem 
                onDeleteButtonClick={this.onDeleteButtonClick}
                index={i}
                key={i}
              >
                {item}
              </ListItem>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
