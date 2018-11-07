import { expect } from "chai";
import * as type from "../src/constants/actionTypes";
import reducer from "../src/reducer";

describe("./src/reducer.js", () => {
  it("should increase the count by 1", () => {
    const state = {
      count: 0
    };
    const action = {
      type: type.INCREMENT
    };
    const newState = reducer(state, action);
    expect(newState).to.deep.equal({
      count: 1
    });
  });
  it("should descrease the count by 1", () => {
    const state = {
      count: 5
    };
    const action = {
      type: type.DECREMENT
    };
    const newState = reducer(state, action);
    expect(newState).to.deep.equal({
      count: 4
    });
  });
  it("should add user input to the TODO list", () => {
    const state = {
      count: 5,
      todos: []
    };
    const action = {
      type: type.ADD_TODO,
      userInput: "Talk about Redux"
    };
    const newState = reducer(state, action);
    expect(newState).to.deep.equal({
      count: 5,
      todos: ["Talk about Redux"]
    });
  });
  it("should remove an item from the TODO list", () => {
    const state = {
      count: 5,
      todos: ["Buy Halloween custome", "Finish first project", "Get candy"]
    };
    const action = {
      type: type.DELETE_TODO,
      todoIndex: 1
    };
    const newState = reducer(state, action);
    expect(newState).to.deep.equal({
      count: 5,
      todos: ["Buy Halloween custome", "Get candy"]
    });
  });
});
