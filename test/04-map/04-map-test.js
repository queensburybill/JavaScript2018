const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const {
  map,
  doubleValues,
  extractKey
} = require('../../exercises/04-map/04-map');

it('tests map to see if the function returns an array of modified values', () => {
  let suppliedArr;
  let arrIndex = [];
  const tripledValues = map([1, 2, 3], (number, index, array) => {
    arrIndex.push(index);
    suppliedArr = array;
    return number * 3;
  });
  expect(tripledValues).to.be.equalTo([3, 6, 9]);
  expect(arrIndex).to.be.equalTo([0, 1, 2]);
  expect(suppliedArr).to.be.equalTo([1, 2, 3]);
});
it('tests doubledValues to see if the function returns an array that doubling every value in the array', () => {
  const doubledValues = doubleValues([2, 3, 4], number => {
    return number * 2;
  });
  expect(doubledValues).to.be.equalTo([4, 6, 8]);
});
it('tests extractedName to see if the function returns a new array with the value of a given key in each object', () => {
  const extractedName = extractKey(
    [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }],
    'name'
  );
  expect(extractedName).to.be.equalTo(['Elie', 'Tim', 'Matt', 'Colt']);
});
