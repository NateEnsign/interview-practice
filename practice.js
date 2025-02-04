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

let test =
  " Hey do you want to go to the        grocery store amoOng the HEATHENS?  ";

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


const fibonacciSequence = (num) => {
    let arr = [0,1];

    if (num <= 0) return 'Please enter positive integer';
    if (num === 1) return [0];
    if (num === 2) return arr;

    while (num > 2){
        arr.push(arr.slice(-2).reduce((a,b) => a + b));
        num--;
    }
    return arr;
}

console.log(fibonacciSequence(10))