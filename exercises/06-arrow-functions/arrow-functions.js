/**
 * Refactor the following to use ES6 arrow syntax.
 * Make sure your refactored function is still called "add".
 * Extra points if you can fit it on one line.
 * @param {number} a
 * @param {number} b
 * @returns {number} the sum of `a` plus `b`
 */
const add = (a, b) => a + b;

/**
 * Refactor the following to use ES6 arrow syntax.
 * Make sure your refactored function is still called "tripleAndFilter".
 * @param {array} arr an array of numbers
 * @returns {array} an array of only the numbers that, when multiplied by 3,
 * are divisibile by 5
 */
const tripleAndFilter = arr => arr.map(value => value * 3).filter(value => value % 5 === 0);

/**
 * Refactor the following to use ES6 arrow syntax.
 * Make sure your refactored function is still called "doubleOddNumbers".
 * @param {array} arr an array of numbers
 * @returns {array} an array of only the even numbers. Each value in the
 * new array of numbers is doubled
 */
const doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2);

/**
 * Refactor the following to use ES6 arrow syntax and let declarations.
 * Make sure your refactored function is still called "sayNameLaterObj".
 * When `sayNameLaterObj.sayLater()` is called on, it should print "Jamal"
 * Sorry, this does not have a unit test. For JSBin,
 * @see https://jsbin.com/teroruyege/2/edit?js,console
 */
var sayNameLaterObj = {
  name: "Jamal",
  sayLater: () => {
    setTimeout(() => console.log(this.name), 1000);
  }
};

module.exports = {
  add,
  tripleAndFilter,
  doubleOddNumbers
};
