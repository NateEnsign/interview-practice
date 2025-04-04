
// const { twoSum } = require('./practice');

// test('finds correct indices for basic case', () => {
//   expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
// })

// test('handles negative numbers', () => {
//     expect(twoSum([-3,4,3,90],0)).toEqual([0,2])
// })

// test('works with duplicate numbers', () => {
//     expect(twoSum([3,5,6,7,3],6)).toEqual([0,4])
// })

// test('works with large numbers', () => {
//     expect(twoSum([50,77,99,1005,3333333,55],105)).toEqual([0,5])
// })

// test('returns empty array when input array is empty', () => {
//     expect(twoSum([],5)).toEqual([]);
// })




// test('Finds first unique char for standard case', () => {
//     expect(firstUniqueChar('aassdffgg')).toEqual('d')
// })

// test('return null for no no unique characters', () => {
//     expect(firstUniqueChar('aabbccdd')).toEqual(null)
// })

// test('First character is unique', () => {
//     expect(firstUniqueChar('abbccddee')).toEqual('a')
// })

// test('Last character is unqiue', () => {
//     expect(firstUniqueChar('aabbccdde')).toEqual('e')
// })

// test('Returns first of multipl unique characters', () => {
//     expect(firstUniqueChar('abbccdde')).toEqual('a')
// })


const { changeToCamelCase } = require('./practice.js');

// test('Changes to camel case from standard string', () => {
//     expect(changeToCamelCase('Hey this should be a good test')).toEqual('heyThisShouldBeAGoodTest')
// })

// test('Changes to camel case from snake case', () => {
//     expect(changeToCamelCase('now_we_try_snake_case')).toEqual('nowWeTrySnakeCase')
// })

// test('Changes to camel case from title case', () => {
//     expect(changeToCamelCase('change-this-please')).toEqual('changeThisPlease')
// })

// test('Changes to camel case from combo of others plus white space', () => {
//     expect(changeToCamelCase(' Down with-the_king')).toEqual('downWithTheKing')
// })