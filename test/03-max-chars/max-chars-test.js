var sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
const { maxChars } = require("../../exercises/03-max-chars/max-chars");
describe("max chars", () => {
  it("should return the letter that occurred the most in a given string", () => {
    const result = maxChars("aaaaab");
    expect(result).to.be.equal("a");
  });
});
