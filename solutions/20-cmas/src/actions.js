/**
 * Import action types from "src/constants/actionTypes.js"
 */

import * as types from "./constants/actionTypes";

/**
 * Create and export an a function for each action
 * @example
 * export function addTodo(userInput) => {
 *   return {
 *     type: types.ADD_TODO,
 *     userInput: userInput
 *   }
 * };
 */

export const signin = (memberId, pin) => {
  return {
    type: types.SIGNIN,
    memberId,
    pin
  };
};

export const fetchAllNominees = () => {
  return {
    type: types.FETCH_ALL_NOMINEES
  };
};

export const vote = (categoryId, nomineeIndex) => {
  return {
    type: types.VOTE,
    categoryId,
    nomineeIndex
  };
};

export const completeVoting = () => {
  return {
    type: types.COMPLETE_VOTING
  };
};
