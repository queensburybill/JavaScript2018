var sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
chai.use(require("sinon-chai"));
const { anagrams } = require("../../exercises/04-anagram/04-anagram");

describe("anagrams", () => {
  it('hello" is an anagram of "llohe', () => {
    expect(anagrams("hello", "llohe")).to.equal(true);
  });
  it("care is an anagram of race", () => {
    expect(anagrams("care", "race")).to.equal(true);
  });
  it("hello is not an anagram of hi", () => {
    expect(anagrams("hello", "hi"), () => {
      expect(anagrams("hello", "hi")).to.equal(false);
    });
  });
});
