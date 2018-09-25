/**
 * The following functions, except for multiply, have already been written for you.
 * You will write unit tests in `test/05-unit-testing/unit-testing-test.js`
 */

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

/**
 * Write out the function multiply, which multiplies two numbers
 * @param {number} a
 * @param {number} b
 */

/**
 * Loops through a multidimensional array of object literals
 * and returns a new array where only the adults are included
 *
 * @example
 * findAdults([{ name: "Aiden", age: 10 }, { name: "Janet", age: 43 }])
 *  // [{ name: "Janet", age: 43 }]
 *
 * @param {array} people a multidimensional array containing objects
 * where each object represents a person
 * and each object has the property age
 * @returns {array} the object literals in the array where the age is
 * greater than or equal to 18
 */
function findAdults(people) {
  return people.filter(function(person) {
    return person.age >= 18;
  });
}

module.exports = {
  add,
  subtract,
  // Include multiply here
  findAdults
};
