// let text = "aaabbbbcccddeeeeefff";

    // let setPairs = (text) => {
    //     let arr = [...new Set(text)];

    //     return arr.map(el => [el, [...text].filter(e => e === el).length]).sort((a,b) => b[1] - a[1])
    // }

    // console.log(setPairs(text))

    // let digPow = (n,p) => {
    //     let total = String(n).split('').reduce((acc,num,i) => acc + +Math.pow(num,p+i),0);

    //     return total
    // }

    // console.log(digPow(222,3))


//    let digPow = (n,p) => {
//     let total = String(n).split('').reduce((acc,num,i) => acc + +Math.pow(num,p+i),0)

//     return total % n ? -1 : total/n
//    }

//    console.log(digPow(89,1))

// let nate = (text) => {
//     let array = text.split('')

//     return array.reduce((acc, n) => {
//         if (!acc.includes(n)) acc.push(n)
//         return acc
//     }, [])
// }

// console.log(nate(text))


// let text = "aaabbbbcccddeeeeefff"

// let elPairs = (text) => {
//     let array = [...new Set(text)]

//     return array.map(el => [el, [...text].filter(e => e === el).length]).sort((a,b) => b[1] - a[1])
// }

// console.log(elPairs(text))

// console.log([...new Set(text)])

// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%3 === 0 && i%5 === 0 ? 'FizzBuzz' : i%3 === 0 ? 'Fizz' : i%5 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// let reverseWords = (str) => {
//     console.log(str.split(' ').map((word) => word.split('').reverse().join('')).join(' '))
// }

// reverseWords('yeH uoy dluohs reffo em a !boj')

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     let merged = [...arr1,...arr2];

//     console.log(merged.sort((a,b) => a - b))
// }

// mergeArrays(array1,array2)

// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((acc,num) => acc + num,0))
//         num--;
//     }

//     return arr
// }

// console.log(fibonacciSequence(-6))

// let fibonacciSequence = (num) => {
//     let arr = [];
//     let f1 = 0;
//     let f2 = 1;
//     let nextFib;

//     if (num <= 0) return 'Please enter positive integer'

//     for (let i = 1; i <= num; i++){
//         arr.push(f1);
//         nextFib = f1 + f2;
//         f1 = f2;
//         f2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(2))


// let text = "aaabbbbcccddeeeeefff"

// let pairCount = (str) => {
//     let arr = [...new Set(str)]

//     return arr.map(el => [el, [...str].filter(e => e === el).length]).sort((a,b) => b[1] - a[1])
// }

// console.log(pairCount(text))


// let digPow = (n,p) => {
//     let total = [...String(n)].reduce((acc,num,i) => acc + Math.pow(num,p+i),0)

//     console.log(total)
// }

// digPow(222,3)

// let fizzBuzz = (start,end) => {
//     while (start <= end){
//         console.log(start%3 === 0 && start%5 === 0 ? 'FizzBuzz' : start%3 === 0 ? 'Fizz' : start%5 === 0 ? 'Buzz' : start);
//         start++;
//     }
// }

// fizzBuzz(1,30)

// let reverseWords = (str) => {
//     console.log(str.split(' ').map((word) => [...word].reverse().join('')).join(' '))
// }

// reverseWords('yeH uoy dluohs reffo em a !boj')

// let fibonacciSequence = (num) => {
//     let arr = [0,1];
    
//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]]
//     if (num === 2) return arr

//     while (num > 2){
//         let [secondToLast,last] = arr.slice(-2)
//         arr.push(secondToLast + last)
//         num--;
//     }

//     return arr;
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;

//     if (num <= 0) return 'Please enter positive integer'

//     for (let i = 1; i <= num; i++){
//         return fib1
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
// }

// console.log(fibonacciSequence(0))


// let fizzBuzz = (start,end) => {
//     while (start <= end){
//         console.log(start%3 === 0 && start%5 === 0 ? 'FizzBuzz' : start%3 === 0 ? 'Fizz' : start%5 === 0 ? 'Buzz' : start)
//         start++
//     }
// }

// fizzBuzz(1,20)

// let mergeArrays = (arr1, arr2) => {
//     let merged = [...arr1,...arr2]

//     console.log(merged.sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)


// let reverseWords = (str) => {
//     console.log(str.split(' ').map((word) => word.split('').reverse().join('')).join(' '))
// }

// reverseWords('yeH uoy dluohs reffo em a !boj')


// let fibonacciSequence = (num) => {
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b,0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))


// let fizzBuzz = (start,end) => {
//     while (start <= end){
//         console.log(start%3 === 0 && start%5 === 0 ? "FizzBuzz" : start%3 === 0 ? 'Fizz' : start%5 === 0 ? 'Buzz' : start)
//         start++
//     }
// }

// fizzBuzz(1,20)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     let merged = [...arr1,...arr2]

//     console.log(merged.sort((a,b) => a - b))
// }

// mergeArrays(array1,array2)

// let reverseWords = (str) => {
//     console.log(str.split(' ').map((word) => [...word].reverse().join('')).join(' '))
// }

// reverseWords('yeH uoy dluohs reffo em a !boj')

// let fibonacciSequence = (num) => {
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b,0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(0))


// let str = 'aaaavvvuuuuuuuuttnrrrrr'

// let letterCount = (str) => {
//     let arr = [...new Set(str)]

//     return arr.map((el) => [el, [...str].filter((e) => e === el).length]).sort((a,b) => b[1] - a[1])
// }

// console.log(letterCount(str))


// let text = "aaabbbbcccddeeeeefff";

// let count = (str) => {
//     let arr = [...new Set(str)]

//     return arr.map((el) => [el, [...str].filter((e) => e === el).length]).sort((a,b) => a[1] - b[1])
// }

// console.log(count(text))

// let reverseWords = (str) => {
//     console.log(str.split(' ').map((word) => [...word].reverse().join('')).join())
// }

// reverseWords('Hey you should offer me a job!')


// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     return [...arr1,...arr2].sort((a,b) => a - b)
// }

// console.log(mergeArrays(array1,array2))


// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b,0))
//         num--
//     }
//     return arr
// }

// console.log(fibonacciSequence(0))



// let fizzBuzz = (start, end) => {
//     for (let i = start; i <= end; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(5,20)

// let mergeArrays = (arr1, arr2) => {
//     let merged = [...arr1,...arr2]

//     console.log(merged.sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)


// let reverseWords = (str) => {
//     console.log(str.split(' ').map((word) => [...word].reverse().join('')).join(' '))
// }

// let string = 'yeH uoy dluohs reffo em a !boj'

// reverseWords(string)


// let fibonacciSequence = (num) => {
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter a positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b, 0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(2))


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
//     return arr
// }

// console.log(fibonacciSequence(5))


// function fizzBuzz(num){
//     for (let i=1; i<=num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(20)

// let mergeArrays = (arr1, arr2) => {
//     let merged = [...arr1,...arr2]

//     console.log(merged.sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)


// let fibonacciSequence = (num) => {
//     let f1 = 0;
//     let f2 = 1;
//     let nextFib;
//     let arr = []

//     if (num <= 0) return "Please enter positive integer"

//     for (let i = 0; i < num; i++){
//         arr.push(f1);
//         nextFib = f1 + f2;
//         f1 = f2;
//         f2 = nextFib;
//     }
//     return arr;
// }

// console.log(fibonacciSequence(5))


// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%3 === 0 && i%5 === 0 ? 'FizzBuzz' : i%3 === 0 ? 'Fizz' : i%5 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(20)

// let arr1 = [1,3,5,7,9]
// let arr2 = [2,4,6,8,10]

// let mergeArrays = (array1,array2) => {
//     return [...array1,...array2].sort((a,b) => a - b)
// }

// console.log(mergeArrays(arr1,arr2))


// let fibonacciSequence = (num) => {
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer'
//     if (num === 1) return arr[0]
//     if (num === 2) return arr

//    while (num > 2){
//     arr.push(arr.slice(-2).reduce((a,b) => a+b,0))
//     num--
//    }
//    return arr
// }

// console.log(fibonacciSequence(2))

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = []

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i = 0; i < num; i++){
//         arr.push(fib1)
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// function fizzBuzz(num){
//     for (let i=1; i<=num; i++){
//         console.log(i%3 === 0 && i%5 === 0 ? 'FizzBuzz' : i%3 === 0 ? 'Fizz' : i%5 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(20)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     let merged = [...arr1,...arr2]
//     console.log(merged.sort((a,b) => a - b))
// }

// mergeArrays(array1,array2)


// let fibonacciSequence = (num) => {
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return arr[0]
//     if (num === 2) return arr;
 
//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b, 0))
//         num--;
//     }
//     return arr;
// }

// console.log(fibonacciSequence(10))


let fibonacciSequence = (num) => {
    let fib1 = 0;
    let fib2 = 1;
    let nextFib;
    let arr = []

    if (num <= 0) return 'Please enter positive integer'

    for (let i = 1; i <= num; i++){
        arr.push(fib1)
        nextFib = fib1 + fib2;
        fib1 = fib2;
        fib2 = nextFib;
    }
    return arr
}

console.log(fibonacciSequence(-3))