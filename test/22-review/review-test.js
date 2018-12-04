const chai = require("chai");
const expect = chai.expect;

chai.use(require("sinon-chai"));
const assertArrays = require("chai-arrays");
const {
  maxChars,
  addItems,
  doubleValues,
  largestNumberInArray,
  onlyOddNumbersValues
} = require("../../exercises/22-review/review");

describe.only("review", () => {
  it("should return only odd numbers", () => {
    const oddNumbers = onlyOddNumbersValues([1, 2, 3, 4, 5, 6]);
    expect(oddNumbers).to.deep.equal([1, 3, 5]);
  });
  it("should return the largest number inside an array", () => {
    const biggestNumber = largestNumberInArray([10, 20, 30, -2]);
    expect(biggestNumber).to.be.equal(30);
  });
  it("tests doubledValues to see if the function returns an array that doubling every value in the array", () => {
    const doubledValues = doubleValues([2, 3, 4]);
    expect(doubledValues).to.deep.equal([4, 6, 8]);
  });
  it("should return the letter that occurred the most in a given string", () => {
    const result = maxChars("aaaaab");
    expect(result).to.be.equal("a");
  });
  it("addItems should add up all the numbers and return the total", () => {
    const total = addItems([1, 2, 3]);
    const negativeTotal = addItems([-10, 5, 5]);
    expect(total).to.equal(6);
    expect(negativeTotal).to.equal(0);
  });
});
