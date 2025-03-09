
const { twoSum } = require('./practice');

test('finds correct indices for basic case', () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
})

test('handles negative numbers', () => {
    expect(twoSum([-3,4,3,90],0)).toEqual([0,2])
})

test('works with duplicate numbers', () => {
    expect(twoSum([3,5,6,7,3],6)).toEqual([0,4])
})

test('works with large numbers', () => {
    expect(twoSum([50,77,99,1005,3333333,55],105)).toEqual([0,5])
})

test('returns empty array when input array is empty', () => {
    expect(twoSum([],5)).toEqual([]);
})