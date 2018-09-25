const { expect } = require("chai");
const {
  getCarBrand,
  motorcycle
} = require("../../exercises/05-this-keyword/this-keyword");

describe("this keyword", () => {
  it('getCarBrand() will return "Nissan"', () => {
    expect(getCarBrand()).to.equal("Nissan");
  });

  it('motorcycle.getMotorcyleBrand() will return "Harley Davidson"', () => {
    expect(motorcycle.getMotorcyleBrand()).to.equal("Harley Davidson");
  });
});
