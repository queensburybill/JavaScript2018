const chai = require("chai");
const expect = chai.expect;
chai.use(require("sinon-chai"));
const assertArrays = require("chai-arrays");
const { diffArray } = require("../../exercises/07-array-diff/07-array-diff");

describe("arr-diff", () => {
  it('should return ["pink wool"]', () => {
    const result = diffArray(
      ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    );
    expect(result).to.have.members(["pink wool"]);
  });
  it("it should return [4]", () => {
    const result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
    expect(result).to.have.members([4]);
  });
  it("it should return an item of six items", () => {
    const result = diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
    expect(result).to.have.members([1, 3, 7, "calf", "piglet", "filly"]);
  });
  it("it should return an array of three items", () => {
    const result = diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
    expect(result).to.have.members(["snuffleupagus", "cookie monster", "elmo"]);
  });
});
