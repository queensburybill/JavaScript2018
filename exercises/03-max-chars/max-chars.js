/**
 * Find the character that is most commonly used in the string
 * @param {string} string
 * @returns {string} character that occurs most often
 * @example
 * maxChar("aaaabc"); // a
 */

function maxChars(string) {
  let charOccurs = {};
  for (let char of string.split("")) {
    if (!charOccurs.char) {
      charOccurs.char = 1;
    } else charOccurs.char++
  } 
  let allChars = [];
  for (char in charOccurs) { 
    allChars.push(char); 
  }
  return allChars.reduce(a,b => a > b);
}

module.exports = {
  maxChars
};
