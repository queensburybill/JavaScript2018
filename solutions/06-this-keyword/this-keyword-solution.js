/**
 * Change the code below so that when I do this:
 * ```
 * getCarBrand();
 * ```
 * it will return "Nissan"
 */

// Solution 1
var car = {
  brand: "Nissan",
  getBrand: function() {
    return car.brand; // Change "this" keyword to "car"
  }
};
var getCarBrand = car.getBrand;

// Solution 2
var car = {
  brand: "Nissan",
  getBrand: function() {
    return this.brand;
  }
};
var getCarBrand = car.getBrand.bind(car); // bind "car" to "car.getBrand"

/**
 * Change the code below so that when I do this:
 * ```
 * motorcycle.getMotorcyleBrand();
 * ```
 * it will return "Harley Davidson"
 */

// Solution 1
var motorcycle = {
  brand: "Harley Davidson",
  getMotorcyleBrand: function() {
    var closure = function() {
      return this.brand; // Change "this" keyword to "motorcycle"
    };
    return closure();
  }
};

// Solution 2
var motorcycle = {
  brand: "Harley Davidson",
  getMotorcyleBrand: function() {
    var closure = function() {
      return motorcycle.brand;
    };
    return closure.call(motorcycle); // Bind "closure" to "motorcycle" with "call" or "apply"
  }
};

module.exports = {
  getCarBrand,
  motorcycle
};
