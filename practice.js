// function reverseWords(str){
//     console.log(str.split(' ').map((n) => n.split('').reverse().join('')).join(' '))
// }

// let testy = 'yeH uoy doulhs reffo em a !boj'

// reverseWords(testy)

// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         let [x,y] = arr.slice(-2);
//         arr.push(x + y);
//         num--;
//     }
//     return arr;
// }

// console.log(fibonacciSequence(10))

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)


// let fizzBuzz = (start,end) => {
//     for (let i = start; i <= end; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(5,40)

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)

// let reverseWords = (str) => {
//     console.log(str.split(' ').map((n) => n.split('').reverse().join('')).join(' '))
// }

// let testy = 'yeH uoy dluohs reffo em a !boj'

// reverseWords(testy)


// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)


// let fibonacciSequence = (num) => {
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

// console.log(fibonacciSequence(10))


// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)


// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)


// let reverseWords = (str) => {
//     console.log(str.split(' ').map((n) => n.split('').reverse().join('')).join(' '))
// }

// let testy = 'yeH uoy dluohs reffo em a !boj'

// reverseWords(testy)


// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive interger';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b,0))
//         num--;
//     }
//     return arr;
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++) {
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)


// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)


// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 1) return arr;

//     while (num > 2){
//         let [x,y] = arr.slice(-2);
//         arr.push(x + y);
//         num--;
//     }
//     return arr;
// }

// console.log(fibonacciSequence(10))


// let reverseWords = (str) => {
//     console.log(str.split(' ').map((n) => n.split('').reverse().join('')).join(' '))
// }

// let testy = 'yeH uoy dluohs reffo em a !boj'

// reverseWords(testy)


// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)


// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// let fibonacciSequence = (num) => {
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

// console.log(fibonacciSequence(10))


// let reverseWords = (str) => {
//     console.log(str.split(' ').map((n) => n.split('').reverse().join('')).join(' '))
// }

// let testy = 'yeH uoy dluohs reffo em a !boj'

// reverseWords(testy)

// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)


// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         let [x,y] = arr.slice(-2);
//         arr.push(x + y)
//         num--;
//     }
//     return arr;
// }

// console.log(fibonacciSequence(10))

// function reverseWords(str){
//     console.log(str.split(' ').map((n) => n.split('').reverse().join('')).join(' '))
// }

// let testy = 'yeH uoy dluohs reffo em a !boj'

// reverseWords(testy)

// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)


// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b,0))
//         num--;
//     }
//     return arr;
// }

// console.log(fibonacciSequence(10))


// let reverseWords = (str) => {
//     console.log(str.split(' ').map((n) => n.split('').reverse().join('')).join(' '))
// }

// let test = 'yeH uoy dluohs reffo em a !boj'

// reverseWords(test)


// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)


// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9];
// let array2 = [2,4,6,8,10];

// mergeArrays(array1,array2)


// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = []

//     if (num <= 0 ) return 'Please enter positive integer'

//     for (let i = 0; i < num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr;
// }

// console.log(fibonacciSequence(10))


// let reverseWords = (str) => {
//     console.log(str.split(' ').map((n) => n.split('').reverse().join('')).join(' '))
// }

// let test = 'yeH uoy dluohs reffo em a !boj'

// reverseWords(test)


// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)


// let fibonacciSequence = (num) => {
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         let [x,y] = arr.slice(-2);
//         arr.push(x + y);
//         num--;
//     }
//     return arr;
// }

// console.log(fibonacciSequence(10))


// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)


// let reverseWords = (str) => {
//     console.log(str.split(' ').map((n) => n.split('').reverse().join('')).join(' '))
// }

// let test = 'yeH uoy dluohs reffo em a !boj'

// reverseWords(test)


// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)


// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)


// let fibonacciSequence = (num) => {
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

// console.log(fibonacciSequence(10))


// let reverseWords = (str) => {
//     console.log(str.split(' ').map((n) => n.split('').reverse().join('')).join(' '))
// }

// let test = 'yeH uoy dluohs reffo em a !boj'

// reverseWords(test)


// let fizzBuzz = (num) => {
//     let arr = [];
//     for (let i = 1; i <= num; i++){
//         i%5 === 0 && i%3 === 0 ? arr.push('FizzBuzz') : i%5 === 0 ? arr.push('Fizz') : i%3 === 0 ? arr.push('Buzz') : arr.push(i)
//     }
//     console.log(arr)
// }

// fizzBuzz(30)


// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)


// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         let [x,y] = arr.slice(-2);
//         arr.push(x + y);
//         num--;
//     }
//     return arr;
// }

// console.log(fibonacciSequence(10))


// let reverseWords = (str) => {
//     console.log(str.split(' ').map((n) => n.split('').reverse().join('')).join(' '))
// }

// let test = 'yeH uoy dluohs reffo em a !boj'

// reverseWords(test)


// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [0];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b))
//     }
//     return arr;

// }

// console.log(fibonacciSequence(1))


// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)


// let fizzBuzz = (num) => {
//     for ( let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)


// let reverseWords = (str) => {
//     console.log(str.split(' ').map((n) => n.split('').reverse().join('')).join(' '))
// }

// let test = 'Hey you should offer me this job!'

// reverseWords(test)


// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)


// let fibonacciSequence = (num) => {
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

// console.log(fibonacciSequence(10))


// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a + b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)


// let reverseWords = (str) => {
//     console.log(str.split(' ').map((n) => n.split('').reverse().join('')).join(' '))
// }

// let test = 'yeh uoy dluohs reffo em a !boj'

// reverseWords(test)


let fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++){
        console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
    }
}

fizzBuzz(30)