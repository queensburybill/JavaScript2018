/**
 * You will be writing unit tests for all of the functions inside `exercises/05-unit-testing/unit-testing-code.js`
 *
 * To run the tests, type the following in your command line from the JavaScript2018 directory:
 * npm run test ./exercises/05-unit-testing/unit-testing-test.js
 *
 * For documentation on what tests you can do,
 * @see https://www.chaijs.com/api/bdd/
 */

const { expect } = require("chai");
const {
  add,
  subtract,
  multiply,
  findAdults
} = require("../../exercises/05-unit-testing/unit-testing");

describe("add", function() {
  it("should add two numbers", function() {
    var sum = add(2, 3);
    expect(sum).to.equal(5);
  });
});

describe("subtract", function() {
  // Write a test for subtract here
  it("should subtract two numbers", function() {
    var difference = subtract(15, 4);
    expect(difference).to.equal(11);
  });
});

describe("multiply", function() {
  // Write the function multiply in `exercises/05-unit-testing/unit-testing-code.js`
  // Export / import the multiply function
  // Write a test for multiply here
  it("should multiply two numbers", function() {
    var product = multiply(3, 4);
    expect(product).to.equal(12);
  });
});

describe("findAdults", function() {
  it("will find, in a multidimensional array, all the people older than 18", function() {
    // Complete a unit test for findAdults here
    // Hint: Arrays are passed by reference, so you will need to call on a test that deeply compares values
    // @see https://www.chaijs.com/api/bdd/
    var people = [
      { name: "Janet", age: 43 },
      { name: "Aiden", age: 10 },
      { name: "Chloe", age: 16 }
    ];
    var adults = findAdults(people);
    expect(adults).to.deep.equal([{ name: "Janet", age: 43 }]);
  });

  it("will return an empty array if no adults are found", function() {
    // Complete a unit test for findAdults here, where you use a different assertion than `.equal()`
    // @see https://www.chaijs.com/api/bdd/
    var people = [
      { name: "Liam", age: 3 },
      { name: "Emma", age: 17 },
      { name: "Ethan", age: 8 }
    ];
    var adults = findAdults(people);
    expect(adults).to.be.empty;
  });
});
