const chai = require("chai");
const expect = chai.expect;

const Counter = require("../../exercises/06-classes/classes").Counter;
const Decrementor =
  require("../../exercises/06-classes/classes").Decrementor || null;

describe("05-classes", () => {
  it("Counter should be a class with the methods add and get and property counter", () => {
    var counter = new Counter(2);
    expect(counter).to.be.an.instanceof(Counter);
    expect(counter.add).to.be.a("function");
    expect(counter.get).to.be.a("function");
    expect(counter.get()).to.equal(2);
  });

  it("add should add a value to the counter and get should return the counter", () => {
    var counter = new Counter();
    counter.add(10);
    counter.add(5);
    expect(counter.get()).to.equal(15);
  });

  it("Decrementor should be a class with the methods add, subtract and get and property counter", () => {
    var decrementor = new Decrementor(3);
    expect(decrementor).to.be.an.instanceof(Decrementor);
    expect(decrementor.add).to.be.a("function");
    expect(decrementor.get).to.be.a("function");
    expect(decrementor.subtract).to.be.a("function");
    expect(decrementor.get()).to.equal(3);
  });

  it("add should add a value to the counter and get should return the counter", () => {
    var decrementor = new Decrementor();
    decrementor.add(7);
    decrementor.add(8);
    expect(decrementor.get()).to.equal(15);
  });

  it("subtract should add a value to the counter and subtract should return the counter", () => {
    var decrementor = new Decrementor();
    decrementor.subtract(7);
    decrementor.subtract(8);
    expect(decrementor.get()).to.equal(-15);
  });
});
