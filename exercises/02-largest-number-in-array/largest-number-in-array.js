/**
 * A function that accepts an array and returns the largest number inside the array
 *
 * @param  {[array]}
 * @return {integar}
 */

function largestNumberInArray(array){
  return array.reduce((a,b) => {
    if (a > b) return a;
    else return b;
  }, 0)
}

module.exports = {
  largestNumberInArray
};
