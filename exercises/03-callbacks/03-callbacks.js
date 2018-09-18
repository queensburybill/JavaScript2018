var instructorNames = ["Jamal", "Matina", "Eddy"];

/**
 * Given a student name, formats and prints out the name in a visually appealing way
 * (e.g. with hyphens or astericks before the name) with `console.log`
 * @example
 *  - Jamal
 *  - Matina
 *  - Eddy
 * @param {string} name instuctor name
 */
function printer(str) {
  return console.log(`- ${str}`);
}

/**
 * Loops through the array of `instructorNames`
 * and for each name, calls upon the function printer to print out the name
 * @param {array} instructorNames
 * @param {function} callback printer function
 */
function printNames(arr, f) {
  for (let name of arr) {
    return printer(name);
  }
}

module.exports = {
  printer,
  printNames
};
