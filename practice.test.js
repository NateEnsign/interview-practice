
const { twoSum } = require('./practice');

test('finds correct indices for basic case', () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
})