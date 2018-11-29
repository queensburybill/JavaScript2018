import * as types from "./constants/actionTypes";

export function rollDice() {
  return {
    type: types.ROLL_DICE
  };
}

export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}

export function addTodo(userInput) {
  return {
    type: types.ADD_TODO,
    userInput
  };
}

export function deleteTodo(todoIndex) {
  return {
    type: types.DELETE_TODO,
    todoIndex
  };
}
