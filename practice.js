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


const fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++){
        console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
    }
}

fizzBuzz(30)