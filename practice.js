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


let string = '!!!!!Nate';

let removeHype = (str,n) => {

    let result = str;

    for (let i = 0; i < n; i++){
        result = result.replace('!', '');
    }
    return result;
}

console.log(removeHype(string,4))


