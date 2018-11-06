import * as type from "./constants/actionTypes";

export function increment() {
  return {
    type: type.INCREMENT
  };
}

export function decrement() {
  return {
    type: type.DECREMENT
  };
}

export function addTodo(userInput) {
  return {
    type: type.ADD_TODO,
    userInput
  };
}

export function addTodo(todoIndex) {
  return {
    type: type.DELETE_TODO,
    todoIndex
  };
}

export function selectColor(optionId) {
  return {
    type: type.SELECT_COLOR,
    optionId
  };
}
