// const fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [0];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// const mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9];
// let array2 = [2,4,6,8,10];

// mergeArrays(array1,array2)

// const reverseWords = (str) => {
//     console.log(str.split(' ').map((w) => w.split('').reverse().join('')).join(' '))
// }

// let test = 'Hey you should offer me a job!'

// reverseWords(test)

// const fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// const fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [0];
//     if (num === 2) return arr;

//     while (num > 2) {
//         arr.push(arr.slice(-2).reduce((a,b) => a + b))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// const fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// const mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)

// const reverseWords = (str) => {
//     console.log(str.split(' ').map((word) => word.split('').reverse().join('')).join(' '))
// }

// let test = 'Hey you should offer me a job!';

// reverseWords(test)

// const fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// const fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;

//     let arr = [];

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i = 0; i < num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr;
// }

// console.log(fibonacciSequence(10));

// function reverseWords(str){
//     console.log(str.split(' ').map((w) => w.split('').reverse().join('')).join(' '))
// }

// let test = 'Hey you should offer me a job!';

// reverseWords(test)

// const fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// const fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;

//     let arr = [];

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i = 0; i < num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr;
// }

// console.log(fibonacciSequence(10));

// function reverseWords(str){
//     console.log(str.split(' ').map((w) => w.split('').reverse().join('')).join(' '))
// }

// let test = 'Hey you should offer me a job!';

// reverseWords(test)

// Let us begin with an example:

// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

// Can you help him?

// How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

// function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
//     var months = 0, moneySaved = 0;
//       while (startPriceNew > startPriceOld + moneySaved){
//           moneySaved += savingperMonth;
//           startPriceOld -= (startPriceOld * (percentLossByMonth / 100));
//           startPriceNew -= (startPriceNew * (percentLossByMonth / 100));
//           months++;
//           if (months % 2 == 1){
//               percentLossByMonth += .5;
//           }
//       }
//       return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
//   }

// let string = '!!!!!Nate';

// let removeHype = (str,n) => {

//     let result = str;

//     for (let i = 0; i < n; i++){
//         result = result.replace('!', '');
//     }
//     return result;
// }

// console.log(removeHype(string,4))

// function listSquared(m, n) {
//     let count = 0;
//     let totalSum = 0;

//       for (let i = m; i <= n; i++){
//         let sum = 0;
//         for (let k = 1; k <= i; k++){
//           if (i%k === 0) sum += k;
//         }
//         let sqrt = Math.sqrt(sum)
//         if (sqrt%sqrt === 0){
//           count++;
//           totalSum += sum;
//         }

//       }
//   return [count, totalSum]
//   }

// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

// function listSquared(m,n){
//     let answer = [];

//     for (let i = m; i <= n; i++){
//         let temp = 0;
//         for (let j = 1; j<= i; j++){
//             if (i%j === 0) temp += j*j;
//         }
//         if (Math.sqrt(temp) % 1 === 0) answer.push([i,temp])
//     }
//     return answer;
// }

// const fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [0];
//     if (num === 2) return arr;

//     for (let i = 0; i < num; i++){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b))
//     }
//     return arr;
// }

// console.log(fibonacciSequence(10))

// const mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9];
// let array2 = [2,4,6,8,10];

// mergeArrays(array1,array2);

// let fizzBuzz = (num) => {
//   for (let i = 1; i <= num; i++) {
//     console.log(
//       i % 5 === 0 && i % 3 === 0
//         ? "FizzBuzz"
//         : i % 5 === 0
//         ? "Fizz"
//         : i % 3 === 0
//         ? "Buzz"
//         : i
//     );
//   }
// };

// fizzBuzz(30);

// const reverseWords = (str) => {
//     console.log(str.split(' ').map((word) => word.split('').reverse().join('')).join(' '))
// }

// let test = 'Hey you should offer me a job';

// reverseWords(test)

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// function replaceVowels(str){
//     console.log(str.replace(/[aeiou]/g, v => v.toUpperCase()))
// }

// let test = 'Hey you should give me a job'

// replaceVowels(test)

// let snakeLadder = () => {
//   let player1 = 0;
//   let player2 = 0;

//   for (let i = 1; i < 50; i++) {
//     let die1 = Math.floor(Math.random() * 6) + 1;
//     let die2 = Math.floor(Math.random() * 6) + 1;

//     if (i % 2 === 0) {
//       player1 += die1 + die2;
//       if (player1 === 2) {
//         player1 = 38;
//       } else if (player1 === 7) {
//         player1 = 14;
//       } else if (player1 === 8) {
//         player1 = 31;
//       } else if (player1 === 15) {
//         player1 = 26;
//       } else if (player1 === 21) {
//         player1 = 42;
//       } else if (player1 === 28) {
//         player1 = 84;
//       } else if (player1 === 36) {
//         player1 = 44;
//       }
//     } else {
//     player2 += die1 + die2;
//     if (player2 === 2) {
//       player2 = 38;
//     } else if (player2 === 7) {
//       player2 = 14;
//     } else if (player2 === 8) {
//       player2 = 31;
//     } else if (player2 === 15) {
//       player2 = 26;
//     } else if (player2 === 21) {
//       player2 = 42;
//     } else if (player2 === 28) {
//       player2 = 84;
//     } else if (player2 === 36) {
//       player2 = 44;
//     }
//   }
//   if (player2 >= 100) return "Player 2 wins!";
//     if (player1 >= 100) return "Player 1 wins!";
// }
// };

// console.log(snakeLadder());

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// function reverse(str) {
//   let arr = str.trim().split(" ");

//   return arr
//     .map((word, index) =>
//       index % 2 !== 0 ? word.split("").reverse().join("") : word
//     )
//     .join(" ");
// }

// let test = "Hey check this out, every other word is going to be reversed just like magic!";

// console.log(reverse(test));

// Digital Cypher assigns to each letter of the alphabet unique number. For example:

//  a  b  c  d  e  f  g  h  i  j  k  l  m
//  1  2  3  4  5  6  7  8  9 10 11 12 13
//  n  o  p  q  r  s  t  u  v  w  x  y  z
// 14 15 16 17 18 19 20 21 22 23 24 25 26
// Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

//  s  c  o  u  t
// 19  3 15 21 20
// Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

// function encode(str, n) {
//   let key = String(n);

//   return str.split("").map((char, i) => {
//     return char.charCodeAt(0) - 96 + +key[i % key.length];
//   });
// }

// console.log(encode("abcdef", 345));

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// const longestVowel = (str) => {
//   let cur = 0;
//   let max = 1;

//   let vowels = "aeiou";

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       cur++;
//       if (cur > max) {
//         max = cur;
//       }
//     } else {
//         cur = 0;
//     }
//   }
//   return max;
// };

// console.log(longestVowel("jjijuuujeejjaaaaaa"));

// const longestVowel = (str) => {
//     let cur = 0;
//     let max = 0;

//     let key = 'aeiou'

//     for (let i = 0; i < str.length; i++){
//         if (key.includes(str[i])){
//             cur++;
//             if (cur > max){
//                 max = cur;
//             }
//         } else {
//             cur = 0;
//         }
//     }
//     return max;
// }

// console.log(longestVowel("jjijuuuuuuuuuujeejjaaaaa"));

// const longestVowel = (str) => {
//     return str.split(/[^aeiou]/).reduce((s,n) => Math.max(s,n.length), 0)
// }

// console.log(longestVowel("jjijuuuuuuuuuujeejjaaaaa"));

// let vowelCity = (str) => {
//     let cur = 0;
//     let max = 0;

//     let key = 'aeiou';

//     for (let i = 0; i < str.length; i++){
//         if (key.includes(str[i])){
//             cur++;
//             if (cur > max){
//                 max = cur;
//             }
//         } else {
//             cur = 0;
//         }
//     }
//     return max;
// }

// console.log(vowelCity("jjijuuuuuuujeejjaaaaa"));

// const vowelCity = (str) => {
//     return str.split(/[^aeiou]/).reduce((a, v) => Math.max(a, v.length), 0);
// }

// const solve = (str) => {
//     return Math.max([...str.match(/[aeiou]+/g).map(x => x.length)])
// }

// function solve(s){
//     return Math.max(...s.match(/[aeiou]+/g).map(x => x.length));
//    }

// console.log(solve("jjijuuuuuuujeejjaaaaa"));

// let sortArr = (arr) => {
//     return arr.sort((a,b) => a - b)
// }

// let array = ['a', 'b', 'a']

// console.log(sortArr(array))

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.

// function checkThreeAndTwo(array) {
//     let a = 0;
//      let b = 0;
//      let c = 0;

//      for (let i = 0; i < 5; i++){
//        if (array[i] === 'a') a++;
//        if (array[i] === 'b') b++;
//        if (array[i] === 'c') c++;
//      }
//      if (a > 0 && b > 0 && c > 0) return false;
//      if (a >= 4 || b >= 4 || c >= 4) return false;
//      return true;
//    }

//    const checkArray = (arr) => {
//     return [2,3].includes(arr.filter((val) => val === arr[0]).length) && new Set(arr).size === 2;
//    }

//    let array = ['a', 'a', 'b', 'c', 'a']

//    console.log(checkArray(array))

// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// let palindrome = (str) => {
//     let arr = str.split(' ')
//     let longest = 0;

//     for (i = 0; i < arr.length; i++){
//         if (arr[i] === arr[i].split('').reverse().join('') && arr[i].length > longest){
//             longest = arr[i].length;
//         }
//     }
//     return longest;
// }

// let string = 'asdfasdfasdf jhj isofs owiejfowj ertytre asodifjaposf';

// console.log(palindrome(string))

// const vowelCity = (str) => {

//     return Math.max(...str.split(/[^aeiou]/).map((el) => el.length));

// }

// let string = 'ttttuttttuuttttooottttiiiiiitttaaaa'

// console.log(vowelCity(string))

// let arr = [1,4,6,8,9]

// console.log(Math.max(...arr))

// const vowelTown = (str) => {
//   let cur = 0;
//   let max = 0;

//   let key = "aeiou";

//   for (let i = 0; i < str.length; i++) {
//     if (key.includes(str[i])) {
//       cur++;
//       if (cur > max) {
//         max = cur;
//       }
//     } else {
//       cur = 0;
//     }
//   }
//   return max;
// };

// let string = "ttttuttttuuttttooottttiiiiitttaaaa";

// console.log(vowelTown(string));

// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// input: s = [sunday, monday, tuesday,...] , sunday = [555,666,444,555,666]

// function stairsIn20(s){
//     return s.map((a) => a.reduce((a,b) => a + b)).reduce((a,b) => a + b) * 20

//   }

// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// const twoHigh = (arr) => {
//    return [...new Set(arr.sort((a,b) => b - a))].slice(0,2)
// }

// let array = [4,4,4,4,4,5,11,4,6,4,8,4,9,5,24,6]

// console.log(twoHigh(array));

// let arr = [1,2,3,3,3,3,3,4]

// console.log([...new Set(arr)])
// console.log(new Set(arr))

// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

// function boredom(staff) {
//   let score = 0;

//   let arr = Object.values(staff);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] === "accounts"
//       ? (score += 1)
//       : arr[i] === "finance"
//       ? (score += 2)
//       : arr[i] === "canteen"
//       ? (score += 10)
//       : arr[i] === "regulation"
//       ? (score += 3)
//       : arr[i] === "trading"
//       ? (score += 6)
//       : arr[i] === "change"
//       ? (score += 6)
//       : arr[i] === "IS"
//       ? (score += 8)
//       : arr[i] === "retail"
//       ? (score += 5)
//       : arr[i] === "cleaning"
//       ? (score += 4)
//       : (score += 25);
//   }
//   if (score <= 80) return "kill me now";
//   if (score > 100) return "party time!!";
//   return "i can handle this";
// }

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// const transformString = (str) => {
//     let newStr = '';

//     for (let i = 0; i < str.length; i++){
//         if (str[i] === str[i].toLowerCase()) newStr += `${str[i].toUpperCase()}`;
//         if (str[i] === str[i].toUpperCase()) newStr += `${str[i].toLowerCase()}`;
//     }

//     return newStr.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');
// }

// let test =
//   " Hey do you want to go to the        grocery store amoOng the HEATHENS?  ";

// console.log(transformString(test))

// function stringTransformer(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) newStr += str[i].toUpperCase();
//     if (str[i] === str[i].toUpperCase()) newStr += str[i].toLowerCase();
//   }

//   return newStr.trim().replace(/\s+/g, ' ').split(" ").reverse().join(" ");
// }

// console.log(stringTransformer(test));

// const transformString = (str) => {
//   return str
//     .split('')
//     .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
//     .join('')
//     .split(' ')
//     .reverse()
//     .join(' ')
//     .trim()
//     .replace(/\s+/g, ' ')
// };

// console.log(transformString(test))

// const removeRotten = (fruits) => {
//     return fruits.map((f) => f.split('').replace('rotten', '').toLowerCase().join(''))
// }

// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.

// function removeRotten(bagOfFruits){
//     return bagOfFruits ? bagOfFruits.map(f => f.replace('rotten', '').toLowerCase()) : [];
//   }

// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// function capitalize(s, arr) {
//   return [...s].map((x, i) => (arr.includes(i) ? x.toUpperCase() : x)).join("");
// }

// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// function maxTriSum(numbers) {
//   return [...new Set(numbers)]
//     .sort((a, b) => a - b)
//     .slice(-3)
//     .reduce((a, b) => a + b);
// }

// const fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [0];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b));
//         num--;
//     }
//     return arr;
// }

// console.log(fibonacciSequence(10))

// const mergeArrays = (arr1,arr2) => {
//     return [...new Set(arr1),...new Set(arr2)].sort((a,b) => a - b)
// }

// let array1 = [1,3,5,7,9,9,9,9];
// let array2 = [2,4,6,6,6,6,8,10];

// console.log(mergeArrays(array1,array2))

// your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

// Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggars will of course take nothing (0).

// Note: in case you don't get why this kata is about English beggars, then you are not familiar on how religiously queues are taken in the kingdom ;)

// Note 2: do not modify the input array.

// let beggers = (values, n) => {
//   let collectionVal = [];

//   for (let i = 0; i < n; i++){
//     let sum = 0;
//     for (let j = i; j < values.length; j += n){
//       sum += values[j];
//     }
//     collectionVal.push(sum);
//   }
//   return collectionVall;
// }

// let beggers = (values, n) => {
//  let outputValues = [];

//  for (let i = 0; i < n; i++){
//   let sum = 0;
//   for (let j = i; j < values.length; j += n){
//     sum += values[j];
//   }
//   outputValues.push(sum);
//  }
//  return outputValues;

// }

// A number is called Automorphic number if and only if its square ends in the same digits as the number itself. For example, 25 is an automorphic number because its square (625) ends with 25.

// Task
// Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"

// Examples
// 25 is an automorphic number, because
// 2
// 5
// 2
// =
// 625
// 25
// 2
//  =625 ends with 25, so return "Automorphic".

// function automorphic(n){
//   let square = n*n;

//   return +square.toString().split('').slice(-1) === +n.toString().split('').slice(-1) ? "Automorphic" : 'Not!!';
// }

// console.log(automorphic(95))

// function automorphic(n){
//   return String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!";
// }

// let num = 656

// console.log(+num.toString().split('').slice(-1))

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// function last(x){
//   let arr =  x.split(' ').map(w => w.split('').reverse().join(''))

//   return arr.sort().map(r => r.split('').reverse().join(''))
// }

// let lastSort = (str) => {
//   return str.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
// }

// let str = 'Hey this should be a fun one'

// console.log(lastSort(str))

// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// function meeting(x){
//   return !x.includes('O') ? 'None available!' : x.indexOf('O');
//   }

// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces

// function decipherThis(str) {
//   return str.split(' ').map(v => {
//     v = v.replace(/[0-9]+/g, m => String.fromCharCode(m))
//     if(v.length < 3) return v
//     else return v.slice(0,1) + v[v.length - 1] + v.slice(2, -1) + v[1]
//   }).join(' ')
// }

// let fibonacciSequence = (num) => {
//   let arr = [0,1];

//   if (num <= 0) return 'Please enter postive integer';
//   if (num === 1) return [0];
//   if (num === 2) return arr;

//   while (num > 2){
//     arr.push(arr.slice(-2).reduce((a,b) => a + b))
//     num--;
//   }
//   return arr
// }

// console.log(fibonacciSequence(10))

// let reverse = (str) => {
//   return str.split(' ').map((e) => e.split('').reverse().join('')).join(' ')
// }

// let test = 'Hey you should offer me a job!'

// console.log(reverse(test))

// function fibonacciSequence(num){
//   let fib1 = 0;
//   let fib2 = 1;
//   let nextFib;

//   let arr = [];

//   if (num <= 0) return 'Please enter positive integer';

//   for (let i = 0; i < num; i++){
//     arr.push(fib1);
//     nextFib = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = nextFib;
//   }
//   return arr;
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//   for (let i = 1; i <= num; i++){
//     console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i);
//   }
// }

// fizzBuzz(30)

// const mergeArrays = (arr1,arr2) => {
//   return [...arr1,...arr2].sort((a,b) => a - b)
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// console.log(mergeArrays(array1,array2))

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// let isPangram = (str) => {
//   let alpha = 'abcdefghijklmnopqrstuvwxyz';
//   let arr = alpha.split('');

//   return arr.every(x => str.toLowerCase().includes(x));
// }

// let test1 =  "The quick brown fox jumps over the lazy dog"
// let test2 = 'Ya this is not going to do the trick'

// console.log(isPangram(test1))

//Write a function that returns true if every letter in a string begins with a capital letter

// let startsCaps = (str) => {
//   let arr = str.split('');

//   return arr.every(word => word[0] === word[0].toUpperCase());
// }

// let test1 = 'HEY LETS SEE IF THIS IS GOING TO WORK';

// let test2 = 'ya lets see if this is going to work';

// console.log(startsCaps(test2))

// Write a function that checks whether a given number is a prime number.

// let isPrime = (num) => {
//   let count = 0;
//   for (let i = 1; i <= num; i++){
//     if (num%i === 0) count++;
//   }
//   return count === 2 ? true : false;
// }

// console.log(isPrime(3))

// const isPrime = (num) => {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };

// console.log(isPrime(3)); // true
// console.log(isPrime(4)); // false

// Given an array of numbers, return a new array with duplicate values removed.

// let uniqueNums = (arr) => {
//   return [...new Set(arr)]
// }

// let test = [1,4,6,7,7,7,3,4,5,5,5,9]

// console.log(uniqueNums(test))

//Write a function that finds the first character in a string that does not repeat. If all characters repeat, return null.

// let nonRepeat = (str) => {
//   for (let i = 0; i < str.length; i++){
//     if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) return str[i]
//   }
//   return null;
// }

// let test = 'aabbccdede';

// console.log(nonRepeat(test))

//Write a function that checks if two strings are anagrams (contain the same characters in a different order).

// let anagramCheck = (str1,str2) => {
//   if (str1.length !== str2.length) return false;

//   let arr = str2.split('');

//   return arr.every(x => str1.includes(x))
// }

// let one = 'abcdefg';
// let two = 'gfedcba';

// console.log(anagramCheck(one,two))

// let fibonacciSequence = (num) => {
//   let arr = [0,1];

//   if (num <= 0) return 'Please enter positive integer';
//   if (num === 1) return [0];
//   if (num === 2) return arr;

//   while (num > 2){
//     arr.push(arr.slice(-2).reduce((a,b) => a + b))
//     num--;
//   }
//   return arr;
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//   for (let i = 1; i <= num; i++){
//     console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//   }
// }

// fizzBuzz(30)

// let mergeArrays = (arr1,arr2) => {
//   console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9];
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)

// let reverseWords = (str) => {
//   console.log( str.split(' ').map((word) => word.split('').reverse().join('')).join(' '));
// }

// let test = 'yeH uoy dluohs reffo em a !boj';

// reverseWords(test)

// Problem:
// Write a function that takes a string containing only lowercase letters and returns the longest substring in which the letters appear in alphabetical order. If there are multiple substrings of the same length, return the first one that appears.

// let longestAlphabeticalString = (str) => {
//   let curr = str[0];
//   let longest = "";

//   for (let i = 1; i < str.length; i++) {
//     if (str[i] >= str[i - 1]) {
//       curr += str[i];
//     } else {
//       if (curr.length > longest.length) {
//         longest = curr;
//       }
//       curr = str[i];
//     }
//   }
//   return curr.length > longest.length ? curr : longest;
// };

// let test = "abcdefgazzzbcdefghijk";

// console.log(longestAlphabeticalString(test));

// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

// Can you help him?

// How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

// function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
//     var months = 0, moneySaved = 0;
//       while (startPriceNew > startPriceOld + moneySaved){
//           moneySaved += savingperMonth;
//           startPriceOld -= (startPriceOld * (percentLossByMonth / 100));
//           startPriceNew -= (startPriceNew * (percentLossByMonth / 100));
//           months++;
//           if (months % 2 == 1){
//               percentLossByMonth += .5;
//           }
//       }
//       return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
//   }

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.

// function checkThreeAndTwo(array) {
//     let a = 0;
//      let b = 0;
//      let c = 0;

//      for (let i = 0; i < 5; i++){
//        if (array[i] === 'a') a++;
//        if (array[i] === 'b') b++;
//        if (array[i] === 'c') c++;
//      }
//      if (a > 0 && b > 0 && c > 0) return false;
//      if (a >= 4 || b >= 4 || c >= 4) return false;
//      return true;
//    }

// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// function maxTriSum(numbers) {
//   return [...new Set(numbers)]
//     .sort((a, b) => a - b)
//     .slice(-3)
//     .reduce((a, b) => a + b);
// }

// Input >> Output Examples
// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
// Explanation:
// 4 is greater than the sum all the elements to its right side

// Note : The last element 0 is equal to right sum of its elements (abstract zero).

// arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
// Explanation:
// 17 is greater than the sum all the elements to its right side

// 5 is greater than the sum all the elements to its right side

// Note : The last element 2 is greater than the sum of its right elements (abstract zero).

// arrayLeaders ({5, 2, -1}) ==> return {5, 2}
// Explanation:
// 5 is greater than the sum all the elements to its right side

// 2 is greater than the sum all the elements to its right side

// Note : The last element -1 is less than the sum of its right elements (abstract zero).

// arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
// Explanation:
// 0 is greater than the sum all the elements to its right side

// -1 is greater than the sum all the elements to its right side

// 3 is greater than the sum all the elements to its right side

// Note : The last element 2 is greater than the sum of its right elements (abstract zero).

// function arrayLeaders(numbers){
//   let answer = [];
//   for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > numbers.slice(i+1).reduce((a,b) => a + b, 0)) answer.push(numbers[i])
//   }
// return answer;
// }

// let arr = [10, 9, 5, 2, 1]

// console.log(arrayLeaders(arr))

// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// function largest(n, array) {
//   if (n === 0) return [];
//   return array.sort((a,b) => a - b).slice(-n)
//   }

//   console.log(largest(0, [9,8,7,6,5,4,3,2,1]))

// function dirReduc(arr){
//   let n = arr.filter(el => el === 'NORTH').length;
//   let s = arr.filter(el => el === 'SOUTH').length;
//   let e = arr.filter(el => el === 'EAST').length;
//   let w = arr.filter(el => el === 'WEST').length;

//   let answer = []

//   if (e > w){
//     let sum = e - w;
//     for (let i = 1; i <= sum; i++){
//       answer.push('EAST');
//     }
//   } else {
//     let sum = w - e;
//     for (let i = 1; i <= sum; i++){
//       answer.push('WEST');
//     }
//   }

//   if (n > s){
//     let sum = n - s;
//     for (let i = 1; i <= sum; i++){
//       answer.push('NORTH');
//     }
//   } else {
//     let sum = s - n;
//     for (let i = 1; i <= sum; i++){
//       answer.push('SOUTH');
//     }
//   }

//   return answer;

// }

// let arr = ['WEST', 'WEST', 'WEST', 'EAST', 'SOUTH', 'SOUTH', 'NORTH', 'NORTH', 'NORTH']

// console.log(dirReduc(arr))

// Find the First Non-Repeating Character
// Given a string, find the first non-repeating character and return it. If there are no unique characters, return null.

// let nonRepeat = (str) => {
//   let charCount = {};

//   for (let char of str){
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   for (let char of str){
//     if (charCount[char] === 1){
//       return char;
//     }
//   }
//   return null;

// }

// let test = 'aabebcdde'

// console.log(nonRepeat(test))

// Question:
// Given a string, write a function to find the first recurring character (the first character that appears more than once). If there are no recurring characters, return null.

// let firstRecur = (str) => {
//   let arr = [];

//   for (let i = 0; i < str.length; i++){
//     if (arr.includes(str[i])) return str[i];
//     arr.push(str[i])
//   }
//   return null;
// }

// let test = 'abcdefgh'

// console.log(firstRecur(test))

// let firstRecur = (str) => {
//   let seen = new Set();

//   for (let char of str){
//     if (seen.has(char)) return char;
//     seen.add(char);
//   }
//   return null;
// }

// let test = 'abcdecfgh'

// console.log(firstRecur(test))

// Problem: Longest Consecutive Sequence
// Given an unsorted array of integers, write a function that finds the length of the longest consecutive sequence of numbers in the array.

// let longestSequence = (arr) => {
//   let count = 1;
//   let answer = 0;

//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] - arr[i-1] === 1){
//       count++
//     } else {
//       if (count > answer) answer = count;
//       count = 1;
//     }

//   }
//   return answer > count ? answer : count;
// }

// let test = [5,4,1,2,3,3,2,3,3,4,5,6,7,4,7,8,9,1,2,3,4,5,6,7,8,9,10]
// let test2 = [9,8,7,6,5,4,3]

// console.log(longestSequence(test))

// Problem: Longest Consecutive Sequence
// Given an unsorted array of integers, write a function that finds the length of the longest consecutive sequence of numbers in the array.

// let longestSequence = (arr) => {
//   let array = [...new Set(arr)].sort((a,b) => a - b);

//   let count = 1;
//   let answer = 0;

//   for (let i = 1; i < array.length; i++){
//     if (array[i] - array[i-1] === 1){
//       count++
//     } else {
//       if (count > answer) answer = count;
//       count = 1;
//     }
//   }
//   return answer > count ? answer : count;
// }

// let test = [6,6,6,4,4,8,8,9,7,6,5,4,3,2,1,2,3,2,2,2,3];

// console.log(longestSequence(test))

// Problem:
// Write a function that takes an array of integers and returns the length of the longest subarray that has a sum equal to zero.

// let sumZeroSub = (arr) => {

// }

// Problem:
// Write a function that takes a string as input and returns true if it contains all the letters from 'a' to 'z' at least once (a pangram), and false otherwise.

// let isPangram = (str) => {
//   let key = 'abcdefghijklmnopqrstuvwxyz';
//   let string = str.toLowerCase();

//   for (let i = 0; i < key.length; i++){
//     if (!string.includes(key[i])) return false;
//   }
//  return true;
// }

// let isPangram = (str) => {
//   let alphabet = new Set('abcdefghijklmnopqrstuvwxyz')
//   let strSet = new Set(str.toLowerCase().replace(/[^a-z]/g, ''))

//   return ([...alphabet].every(letter => strSet.has(letter)));

// }

// let test1 = 'abcdefghijklmnopqrstuvwxyz'

// let test2 = 'abcdefghijklmnopqrstuvwxy'

// console.log(isPangram(test2))

// let mySet = new Set('abcdefg')

// console.log(mySet)

// Set Challenge: Find the Missing Letter
// You're given an array containing a sequence of unique letters in alphabetical order, but one letter is missing. Write a function that finds and returns the missing letter.

// Example Input & Output
// findMissingLetter(["a", "b", "c", "e"]); // Output: "d"
// findMissingLetter(["O", "Q", "R", "S"]); // Output: "P"
// Constraints
// The array will always be in order.
// There will always be exactly one missing letter.
// The input array can contain either uppercase or lowercase, but never mixed.

// let findMissingLetter = (arr) => {
//   let letterSet = new Set(arr);

//   for (let i = 0; i < arr.length; i++) {
//     if (!letterSet.has(String.fromCharCode(arr[i].charCodeAt(0) + 1)))
//       return String.fromCharCode(arr[i].charCodeAt(0) + 1);
//   }
// };

// let array1 = ["a", "b", "d", "e"];

// let array2 = ["e", "f", "g", "h", "j"];

// console.log(findMissingLetter(array1));

// let findMissingLetter = (arr) => {
//   let letterSet = new Set(arr);

//   for (let i = 0; i < arr.length; i++) {
//     if (!letterSet.has(String.fromCharCode(arr[i].charCodeAt(0) + 1))) {
//       return String.fromCharCode(arr[i].charCodeAt(0) + 1);
//     }
//   }
// };

// let array1 = ['a','b','d','e']

// let array2 = ['e','f','g','h','j']

// console.log(findMissingLetter(array1))

// console.log(String.fromCharCode(99))

// Problem: Consecutive Letter Shift
// Write a function shiftLetters(str) that takes a string as input and returns a new string where each letter is replaced by the next letter in the alphabet.
// Rules:
// The function should preserve the case of the original letters (uppercase remains uppercase, lowercase remains lowercase).
// If the letter is 'z', it should wrap around to 'a', and if it's 'Z', it should wrap around to 'A'.
// The function should ignore non-letter characters (they should remain unchanged).

// let shiftLetters = (str) => {
//   let arr = str.split('')

//   return arr.map((letter) => letter === 'z' ? 'a' : letter === 'Z' ? 'A' : letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122 || letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90 ? String.fromCharCode(letter.charCodeAt(0) + 1) : letter).join('');
// }

// let test1 = 'abcdefghiz'

// let test2 = 'efg hij klmn opZ'

// let shiftLetters = (str) => {
//   return str.split('').map((letter) => {
//     let code = letter.charCodeAt(0);

//     if (code >= 65 && code <= 90){
//       return code === 90 ? 'A' : String.fromCharCode(code + 1);
//     } else if (code >= 97 && code <= 122) {
//       return code === 122 ? 'a' : String.fromCharCode(code + 1);
//     } else {
//       return letter;
//     }
//   }).join('');
// }

// console.log(shiftLetters(test2))

// Problem:
// Write a function that takes a string and returns a new string where each letter is replaced with its opposite letter in the alphabet (e.g., 'a' becomes 'z', 'b' becomes 'y', 'c' becomes 'x', etc.). Preserve the case of each letter, and leave non-alphabetical characters unchanged.

// let oppositeLetter = (str) => {
//   return str.split('').map((letter) => {
//     let code = letter.charCodeAt(0);

//     if (code >= 65 && code <= 90){
//       return String.fromCharCode(155 - code);
//     } else if(code >= 97 && code <= 122){
//       return String.fromCharCode(219 - code);
//     }else {
//       return letter;
//     }

//   }).join('');
// }

// Problem:
// Write a function that takes a string as input and returns a new string where each letter is replaced with the letter two places ahead in the alphabet. Wrap around the alphabet if needed (e.g., 'y' becomes 'a', 'z' becomes 'b', 'Y' becomes 'A', 'Z' becomes 'B'). Non-alphabetic characters should remain unchanged.

// let shiftLetters = (str) => {
//   return str.split('').map((letter) => {
//     let code = letter.charCodeAt(0);

//     if (code >= 65 && code <= 90){
//       return letter === 'Y' ? 'A' : letter === 'Z' ? 'B' : String.fromCharCode(code + 2);
//     } else if (code >= 97 && code <= 122){
//       return letter === 'y' ? 'a' : letter === 'z' ? 'b' : String.fromCharCode(code + 2);
//     } else {
//       return letter;
//     }
//   }).join('')
// }

// Problem:
// Write a function that takes a string and returns true if the sum of the character codes of all its letters is an even number, and false otherwise. Ignore non-alphabetic characters.

// let isEvenSum = (str) => {
//   return str.split('').map((letter) => {
//     let code = letter.charCodeAt(0);

//     if (code >= 65 && code <= 90){
//       return code;
//     } else if (code >= 97 && code <= 122){
//       return code;
//     } else {
//       return 0
//     }
//   }).reduce((a,b) => a + b, 0) % 2 === 0;
// }

// let isEvenSum = (str) => {
//   return (
//     str.split("").reduce((sum, letter) => {
//       let code = letter.charCodeAt(0);

//       return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
//         ? sum + code
//         : sum;
//     }, 0) % 2 === 0);
// };

// let test1 = "abcdefghiz";

// let test2 = "efg hij klmn opZ";

// console.log(isEvenSum(test2));



// Problem:
// Write a function that takes a string as input and returns a new string where each letter is replaced by the letter that is symmetrically opposite in the alphabet. That means:

// 'a' ↔ 'z', 'b' ↔ 'y', 'c' ↔ 'x', ..., 'y' ↔ 'b', 'z' ↔ 'a'
// 'A' ↔ 'Z', 'B' ↔ 'Y', 'C' ↔ 'X', ..., 'Y' ↔ 'B', 'Z' ↔ 'A'
// Non-alphabet characters should remain unchanged.


// let mirrorSwitch = (str) => {
//   return str.split('').map((letter) => {
//     let code = letter.charCodeAt(0);

//     if (code >= 65 && code <= 90){
//       return String.fromCharCode(155 - code);
//     }else if (code >= 97 && code <= 122){
//       return String.fromCharCode(219 - code);
//     }else {
//       return letter;
//     }
//   }).join('')
// }


// let switchByPosition = (str) => {
//   return str.split('').map((letter) => {
//     let code = letter.charCodeAt(0);

//     if (code >= 65 && code <= 90){
//       let shift = code - 64;
//       let newCode = code + shift;
//       return String.fromCharCode(newCode > 90 ? newCode - 26 : newCode);
//     }else if (code >= 97 && code <= 122){
//       let shift = code - 96;
//       let newCode = code + shift;
//       return String.fromCharCode(newCode > 122 ? newCode - 26 : newCode);
//     }else {
//       return letter;
//     }
//   }).join('')
// }


// let test1 = "abcdefghiz";

// let test2 = "efg hij klmn opZ";

// console.log(switchByPosition(test1));

// Problem:
// You are given an array of integers. Write a function that finds the smallest positive integer missing from the array.

// Examples:
// js
// Copy
// Edit
// missingInteger([3, 4, -1, 1]) // → 2  
// missingInteger([1, 2, 0]) // → 3  
// missingInteger([7, 8, 9, 11, 12]) // → 1  
// missingInteger([1, 2, 3, 4, 5]) // → 6  
// Constraints:
// The function should run efficiently on large inputs (think O(n) time complexity).
// It should only consider positive integers (ignore negatives and zero).
// You cannot use built-in sorting functions.


// let smallestMissingInt = (arr) => {
//   let numSet = new Set(arr);
//   let numMax = Math.max(...numSet);

//   if (numMax < 1) return 1;

//   for (let i = 1; i <= numMax; i++){
//     if (!numSet.has(i)) return i;
//   }
//   return numMax+1;
// }


// let smallestMissingInt = (arr) => {
//   let numSet = new Set(arr);
//   let maxNum = Math.max(...numSet);

//   if (maxNum <= 0) return 1;

//   for (let i = 1; i <= maxNum; i++){
//     if (!numSet.has(i)) return i;
//   }
//   return maxNum+1;
// }

// let test1 = [1,2,3,4,5]

// let test2 = [-2,-4,-6,0]

// let test3 = [1,2,3,4,6]

// console.log(smallestMissingInt(test3))


// Problem: Majority Element
// Given an array of integers, find the majority element. The majority element is the number that appears more than n/2 times in the array (where n is the length of the array). You can assume that a majority element always exists in the input.

// Example 1:
// js
// Copy
// Edit
// let nums = [3, 3, 4, 2, 3, 3, 3, 1];
// console.log(majorityElement(nums));  
// Output: 3


// let majorityElement = (arr) => {
//   let countObj = {}

//   for (let num of arr){
//     countObj[num] = (countObj[num] || 0) +1;
//   }

//   let majorityCount = arr.length/2;
//   let mostFrequent = null;

//   for (let num in countObj){
//     if (countObj[num] > majorityCount){
//       mostFrequent = +(num);
//       break;
//     }
//   }
//  return mostFrequent
// }

// let test1 = [1,3,4,5,6,7,3,3,3,3,3]

// console.log(majorityElement(test1))


// Problem: Find the Longest Substring Without Repeating Characters
// Write a function that takes a string as input and returns the length of the longest substring that contains no repeating characters.

// Examples:
// js
// Copy
// Edit
// longestUniqueSubstring("abcabcbb") // ➞ 3  ("abc")
// longestUniqueSubstring("bbbbb")    // ➞ 1  ("b")
// longestUniqueSubstring("pwwkew")   // ➞ 3  ("wke")
// longestUniqueSubstring("")         // ➞ 0  (empty string)
// longestUniqueSubstring("abcdef")   // ➞ 6  ("abcdef")



// Problem:
// Write a function that takes a string as input and returns a new string where each letter is replaced by the letter that is symmetrically opposite in the alphabet. That means:

// 'a' ↔ 'z', 'b' ↔ 'y', 'c' ↔ 'x', ..., 'y' ↔ 'b', 'z' ↔ 'a'
// 'A' ↔ 'Z', 'B' ↔ 'Y', 'C' ↔ 'X', ..., 'Y' ↔ 'B', 'Z' ↔ 'A'
// Non-alphabet characters should remain unchanged.


// let mirrorSwitch = (str) => {
//   return str.split('').map((letter) => {
//     let code = letter.charCodeAt(0);

//     if (code >= 65 && code <= 90){
//       return String.fromCharCode(155 - code);
//     }else if (code >= 97 && code <= 122){
//       return String.fromCharCode(219 - code);
//     }else {
//       return letter;
//     }
//   }).join('')
// }


// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// function largest(n, array) {
//   if (n === 0) return [];
//   return array.sort((a,b) => a - b).slice(-n)
//   }

//   console.log(largest(0, [9,8,7,6,5,4,3,2,1]))


// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

function maxTriSum(numbers) {
  return [...new Set(numbers)]
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((a, b) => a + b);
}