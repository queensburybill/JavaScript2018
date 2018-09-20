/**
 * Recreate the filter function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @param {array} arr
 * @param {function} callback
 * @returns {array} new array
 */
function filter(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) newArr.push(arr[i]);
    }
    return newArr;
  }

/**
 * Find and return only the even numbers in an array
 * @param {array} arr
 * @returns {array} a new array that only includes the even numbers
 * @example
 *   onlyEvenValues([1,2,3]) // [2]
 *   onlyEvenValues([5,1,2,3,10]) // [2,10]
 */
function onlyEvenValues(arr) {
  return arr.filter(n => n % 2 === 0);
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/
/**
 * Remove all vowels from within a string
 * @param {string} str
 * @returns {string} string with the vowels removed
 * @example
 *  removeVowels('Elie') // ('l')
 *  removeVowels('TIM') // ('tm')
 *  removeVowels('ZZZZZZ') // ('zzzzzz')
 */
function removeVowels(str) {
  return str.split("").filter(char => !(char === /[aeiou]/).join("");
}

module.exports = {
  filter,
  onlyEvenValues,
  removeVowels
};
