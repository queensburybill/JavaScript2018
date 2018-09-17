/**
 * A palindrom is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 * Checks to see if a string is a palindrome. You must remove special characters.
 * @param  {[string]}  string
 * @return {Boolean}
 */
function isPalindrome(str) {
  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  );
}

module.exports = {
  isPalindrome
};
