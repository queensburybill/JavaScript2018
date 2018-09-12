/**
 * A palindrom is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 * Checks to see if a string is a palindrome. You must remove special characters.
 * @param  {[string]}  string
 * @return {Boolean}
 */
function isPalindrome(str) {
  if (str === str.split("").reverse().join("")) return true;
  else return false;
}

module.exports = {
  isPalindrome
};
