/**
 *
 * Find and return only the even numbers in an array
 * @param {array} arr
 * @returns {array} a new array that only includes the even numbers
 * @example
 *   onlyOddNumbersValues([1,2,3]) // [1,3]
 *   onlyOddNumbersValues([5,1,2,3,10]) // [5,1,3]
 */
function onlyOddNumbersValues(arr) {
  return arr.filter(n => n % 2 !== 0);
}

/**
 * A function that accepts an array and returns the largest number inside the array
 *
 * @param  {[array]}
 * @return {integar}
 */

function largestNumberInArray(array) {
  return array.reduce((total, n) => Math.max(total, n));
}

/**
 * Multiplies each value in an array by two
 * @param {array} arr
 * @returns {array} new array, with each value doubled
 */
function doubleValues(arr) {
  return arr.map(n => n * 2);
}

/**
 * Find the character that is most commonly used in the string
 * @param {string} string
 * @returns {string} character that occurs most often
 * @example
 * maxChar("aaaabc"); // a
 */

function maxChars(string) {
  let result = string[0];
  string.split("").reduce((list, char) => {
    list[char] ? list[char]++ : (list[char] = 1);
    list[char] > list[result] && (result = char);
    return list;
  }, {});
  return result;
}

/**
 * Given an array of numbers, return the sum
 * @param {array} arr an array of numbers, e.g. `[1, 2, 3]`
 * @returns sum
 * @example
 *  addItems([1,5,6]) // 12
 *  addItems([1,-2,-3]) // -4
 */
function addItems(arr) {
  return arr.reduce((sum, n) => sum + n);
}

module.exports = {
  maxChars,
  addItems,
  doubleValues,
  largestNumberInArray,
  onlyOddNumbersValues
};
