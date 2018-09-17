var sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const {
  largestNumberInArray
} = require('../../exercises/02-largest-number-in-array/largest-number-in-array');
describe('testing largest number in aray', () => {
  it('should return the largest number inside an array', () => {
    const biggestNumber = largestNumberInArray([10, 20, 30, -2]);
    expect(biggestNumber).to.be.equal(30);
  });
});
