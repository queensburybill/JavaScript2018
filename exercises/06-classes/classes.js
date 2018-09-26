/**
 * Refactor this to use ES6 class syntax
 *
 * @property {number} startValue On instantiation, the class should be passed a startValue, which the counter will start at
 *
 * The function should return two methods
 * @method add should accept a parameter of type number. The function should add the number to counter
 * @method get return another function to display the counter variable
 *
 */
function Counter(startValue) {
  var counter = startValue || 0;
  return {
    add: function(num) {
      counter += num;
    },
    get: function() {
      return counter;
    }
  };
}

/**
 * Create Decrementor ES6 class which will extend the class counter
 * It should have the method:
 * @method substract which should accept a parameter of type number. The function should subtract the parameter from the counter
 */

module.exports = {
  Counter
  // Export Decrementor here
};
