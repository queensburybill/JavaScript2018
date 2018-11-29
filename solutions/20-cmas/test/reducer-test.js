/**
 * To run each test, type the following from the "react-exercises/16-redux" folder
 * yarn test
 */

import { expect } from "chai";
import reducer from "../src/reducer";
import * as types from "../src/constants/actionTypes";

/**
 * Import action types from "src/constants/actionTypes.js"
 */

describe("./src/reducer.js", () => {
  /**
   * Write at least one unit test for each of your actions
   * @example
   * it("will increase the count by 1", () => {
   *   const state = {
   *     count: 0
   *   };
   *   const action = {
   *     type: types.INCREMENT
   *   };
   *   const newState = reducer(state, action);
   *   expect(newState).to.deep.equal({
   *     count: 1
   *   });
   * });
   */
  describe(types.VOTE, () => {
    it("will tally the first vote in votes", () => {
      const state = {
        memberId: 1234,
        votes: {},
        categories: {
          "1": {
            category: "Entertainer of the Year",
            nominees: [
              "Jason Aldean",
              "Luke Bryan",
              "Kenny Chesney",
              "Chris Stapleton",
              "Keith Urban"
            ]
          }
          // Other categories
        }
      };
      const action = {
        type: types.VOTE,
        categoryId: 1,
        nomineeIndex: 2
      };

      const newState = reducer(state, action);
      expect(newState).to.deep.equal({
        memberId: 1234,
        votes: {
          1: 2
        },
        categories: {
          "1": {
            category: "Entertainer of the Year",
            nominees: [
              "Jason Aldean",
              "Luke Bryan",
              "Kenny Chesney",
              "Chris Stapleton",
              "Keith Urban"
            ]
          }
          // Other categories
        }
      });
    });

    it("will tally the second vote in votes", () => {
      const state = {
        memberId: 1234,
        votes: {
          1: 2
        },
        categories: {
          // Other categories
          "2": {
            category: "Album of the Year",
            nominees: [
              "From A Room: Volume 2, Chris Stapleton",
              "Golden Hour, Kacey Musgraves​",
              "Graffiti U, Keith Urban",
              "Life Changes, Thomas Rhett",
              "The Mountain, Dierks Bentley"
            ]
          }
          // Other categories
        }
      };
      const action = {
        type: types.VOTE,
        categoryId: 2,
        nomineeIndex: 0
      };

      const newState = reducer(state, action);
      expect(newState).to.deep.equal({
        memberId: 1234,
        votes: {
          1: 2,
          2: 0
        },
        categories: {
          // Other categories
          "2": {
            category: "Album of the Year",
            nominees: [
              "From A Room: Volume 2, Chris Stapleton",
              "Golden Hour, Kacey Musgraves​",
              "Graffiti U, Keith Urban",
              "Life Changes, Thomas Rhett",
              "The Mountain, Dierks Bentley"
            ]
          }
          // Other categories
        }
      });
    });

    it("will change the votes if the user votes again", () => {
      const state = {
        memberId: 1234,
        votes: {
          1: 2,
          2: 0
        },
        categories: {
          // Other categories
          "2": {
            category: "Album of the Year",
            nominees: [
              "From A Room: Volume 2, Chris Stapleton",
              "Golden Hour, Kacey Musgraves​",
              "Graffiti U, Keith Urban",
              "Life Changes, Thomas Rhett",
              "The Mountain, Dierks Bentley"
            ]
          }
          // Other categories
        }
      };
      const action = {
        type: types.VOTE,
        categoryId: 2,
        nomineeIndex: 1
      };

      const newState = reducer(state, action);
      expect(newState).to.deep.equal({
        memberId: 1234,
        votes: {
          1: 2,
          2: 1
        },
        categories: {
          // Other categories
          "2": {
            category: "Album of the Year",
            nominees: [
              "From A Room: Volume 2, Chris Stapleton",
              "Golden Hour, Kacey Musgraves​",
              "Graffiti U, Keith Urban",
              "Life Changes, Thomas Rhett",
              "The Mountain, Dierks Bentley"
            ]
          }
          // Other categories
        }
      });
    });
  });
});
