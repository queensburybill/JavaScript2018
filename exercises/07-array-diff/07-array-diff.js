/**
 * Compare two arrays and return a new array with only the values found in one of the arrays
 * @param {array} arr1
 * @param {array} arr2
 * @returns {array} new array of unique values
 */
function diffArray(arr1, arr2) {
  let testArr = arr1.concat(arr2);
  return testArr.filter(x => testArr.lastIndexOf(x) === testArr.indexOf(x));
}

module.exports = {
  diffArray
};
