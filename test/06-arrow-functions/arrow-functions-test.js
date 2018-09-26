const chai = require("chai");
const expect = chai.expect;
chai.use(require("sinon-chai"));
const assertArrays = require("chai-arrays");
chai.use(assertArrays);

const {
  add,
  tripleAndFilter,
  doubleOddNumbers
} = require("../../exercises/06-arrow-functions/arrow-functions");

describe("ES6 arrow functions", () => {
  it("it should use the arrow functions and add to variables and return the value", () => {
    const result = add(5, 3);
    expect(result).to.equal(8);
  });
  it("it should return an array of divisble by 5 numbers contained in an array", () => {
    const result = tripleAndFilter([5, 10, 20, 21, 22, 23, 24, 25]);
    expect(result).to.be.equalTo([15, 30, 60, 75]);
  });
  it("should double odd numbers", () => {
    const result = doubleOddNumbers([2, 3, 4, 5]);
    expect(result).to.be.equalTo([6, 10]);
  });
});
