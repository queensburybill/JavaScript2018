var sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
chai.use(require("sinon-chai"));
const assertArrays = require("chai-arrays");
chai.use(assertArrays);
const {
  filter,
  onlyEvenValues,
  removeVowels
} = require("../../exercises/04-filter/04-filter");

describe("testing filter Array method", () => {
  let arrIndex = [];
  let arrTest = "";
  it("filter should return a filtered array, which accepts a callback with the parameters item, index and array", () => {
    const notCat = filter(["dog", "human", "cat"], (item, index, array) => {
      arrIndex.push(index);
      arrTest = array;
      if (item !== "cat") {
        return item;
      }
    });
    expect(arrIndex).to.be.equalTo([0, 1, 2]);
    expect(arrTest).to.be.equalTo(["dog", "human", "cat"]);
    expect(notCat).to.be.equalTo(["dog", "human"]);
  });
  it("onlyEvenValues should only return even values", () => {
    const evenNumberonlyEvenValues = onlyEvenValues([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(evenNumberonlyEvenValues).to.be.equalTo([2, 4, 6, 8]);
  });
  it("removeVowels should return a string without any vowels being present", () => {
    const noVowels = removeVowels("Jamal");
    expect(noVowels).to.be.equal("Jml");
  });
});
