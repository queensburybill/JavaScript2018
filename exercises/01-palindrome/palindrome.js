/**
 * A palindrom is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 * Checks to see if a string is a palindrome. You must remove special characters.
 * @param  {[string]}  string
 * @return {Boolean}
 */
function isPalindrome(str) {
  console.log(str);
  let l = str.length - 1;
  for (let i = 0; i < Math.floor(str.length/2); i++) {
      if (str[i] !== str[l]) return false;
      l--;
  }
  return true;
}

module.exports = {
  isPalindrome
};
