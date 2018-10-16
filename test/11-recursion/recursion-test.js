const chai = require("chai");
const expect = chai.expect;
const { fib } = require("../../exercises/11-recursion/recursion");

describe("testing the 10-th Fibonacci number", () => {
  it("should return the 10-th Fibonacci number", () => {
    const fibonacci = fib(10);
    expect(fibonacci).to.be.equal(55);
  });
});
