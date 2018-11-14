import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";

class Todo extends Component {
  state = {
    userInput: ""
  };
  setUserInput = userInput => {
    this.setState({ userInput: userInput });
  };
  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.userInput);
  };
  render() {
    return (
      <div className="mt-4">
        <h1 className="h3">Todo List</h1>
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
        <ul className="list-group">
          {this.props.todos.map((text, index) => {
            const key = `todo-item-${index}`;
            return (
              <ListItem
                deleteTodo={this.props.deleteTodo}
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

export default Todo;
