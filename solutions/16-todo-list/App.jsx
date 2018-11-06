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
    userInput: "",
    todos: []
  };
  setUserInput = userInput => {
    this.setState({ userInput: userInput });
  };
  addTodo = e => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.userInput],
      userInput: ""
    });
  };
  removeTodo = todoIndex => {
    this.setState({
      todos: this.state.todos.filter((item, index) => {
        return index !== todoIndex;
      })
    });
  };
  render() {
    return (
      <div className="container mt-4">
        <header className="App-header">
          <h1>Todo List</h1>
          <form className="form-group" onSubmit={this.addTodo}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter text"
                aria-label="Enter text"
                aria-describedby="button-add"
                value={this.state.userInput}
                onChange={e => this.setUserInput(e.target.value)}
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
          {this.state.todos.map((text, index) => {
            const key = `todo-item-${index}`;
            return (
              <ListItem
                removeTodo={this.removeTodo}
                todoIndex={index}
                key={key}
              >
                {text}
              </ListItem>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
