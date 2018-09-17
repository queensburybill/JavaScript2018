var sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
chai.use(require("sinon-chai"));
const {
  printer,
  printNames
} = require("../../exercises/03-callbacks/03-callbacks");

describe("to test the implementation of callbacks", () => {
  it("the callback is correctly called", () => {
    var callback = sinon.spy();
    printNames(["test", "test1", "test3"], callback);
    expect(callback.calledThrice).to.equal(true);
  });
});
