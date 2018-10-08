const chai = require("chai");
const expect = chai.expect;
chai.use(require("sinon-chai"));

const { destroyer } = require("../../exercises/09-arguments/argument");

describe("destroy", () => {
  it("should return [1, 1]", () => {
    const result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
    console.log(result);
    expect(result).to.have.members([1, 1]);
  });
  it("should return [1, 5, 1]", () => {
    const result = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
    expect(result).to.have.members([1, 5, 1]);
  });
  it("it should return an empty array", () => {
    const result = destroyer([2, 3, 2, 3], 2, 3);
    expect(result).to.have.members([]);
  });
  it("it should return hamburger", () => {
    const result = destroyer(["tree", "hamburger", 53], "tree", 53);
    expect(result).to.have.members(["hamburger"]);
  });
});
