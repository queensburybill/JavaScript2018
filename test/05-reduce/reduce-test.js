var sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
chai.use(require("sinon-chai"));
const assertArrays = require("chai-arrays");
chai.use(assertArrays);

const {
  addItems,
  generateTally,
  flattenArray,
  arrayToObject
} = require("../../exercises/05-reduce/reduce");

describe("testing the functionalitly of Reduce", () => {
  it("addItems should add up all the numbers and return the total", () => {
    const total = addItems([1, 2, 3]);
    const negativeTotal = addItems([-10, 5, 5]);
    expect(total).to.equal(6);
    expect(negativeTotal).to.equal(0);
  });
  it("generateTally should return a tally using the object data structure ", () => {
    const tally = generateTally([
      "es6",
      "es6",
      "es6",
      "es5",
      "react",
      "angular",
      "vue"
    ]);
    expect(tally).to.deep.equal({
      es6: 3,
      es5: 1,
      react: 1,
      angular: 1,
      vue: 1
    });
  });
  it("flattenArray should return a flattened array", () => {
    const flat = flattenArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(flat).to.be.equalTo([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("arrayToObject should transform and array of objects to accessible via id", () => {
    const peopleArray = [
      { id: 123, name: "dave", age: 23 },
      { id: 456, name: "chris", age: 23 },
      { id: 789, name: "bob", age: 23 },
      { id: 101, name: "tom", age: 23 },
      { id: 102, name: "tim", age: 23 }
    ];
    const peopleObject = {
      123: { id: 123, name: "dave", age: 23 },
      456: { id: 456, name: "chris", age: 23 },
      789: { id: 789, name: "bob", age: 23 },
      101: { id: 101, name: "tom", age: 23 },
      102: { id: 102, name: "tim", age: 23 }
    };
    const arrOfObj = arrayToObject(peopleArray);
    expect(arrOfObj).to.deep.equal(peopleObject);
  });
});
