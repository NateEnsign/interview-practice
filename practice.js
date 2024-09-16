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

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = []

//     if (num <= 0) return 'Please enter positive integer'

//     for (let i = 1; i <= num; i++){
//         arr.push(fib1)
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(-3))

// let vowel2index = (str) => {
//     return str.replace(/[aeiou]/ig, (v,i) => i +1)
// }

// let string = 'Hey you should offer me this job!'

// console.log(vowel2index(string))

// let fizzbuzz = (num) => {
//     let i = 1
//     while (i <= num){
//         console.log(i%3 === 0 && i%5 === 0? 'FizzBuzz' : i%3 === 0 ? 'Fizz' : i%5 === 0 ? 'Buzz' : i)
//         i++
//     }
// }

// fizzbuzz(20)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     return [...arr1,...arr2].sort((a,b) => a + b)
// }

// console.log(mergeArrays(array1,array2))

// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return arr[0];
//     if (num === 2) return arr;

//    while (num > 2){
//     arr.push(arr.slice(-2).reduce((a,b) => a+b,0))
//     num--;
//    }
//    return arr
// }

// console.log(fibonacciSequence(-4))

// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%3 === 0 ? 'Fizz' : i%5 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(20)

// let mergeArrays = (arr1,arr2) => {
//     let merged = [...arr1,...arr2]
//     console.log(merged.sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)

// let fibonacciSequence = (num) => {
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return arr[0];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b, 0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = [];

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i = 1; i<= num; i++){
//         arr.push(fib1)
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(0))

// let fizzBuzz = (num) => {
//     let i = 1
//     while (i <= num){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0? 'Buzz' : i)
//         i++
//     }
// }

// fizzBuzz(15)

// function fizzBuzz(num){
//     for (let i = 1; i<=num; i++){
//         console.log(i%5===0 && i%3===0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     return [...arr1,...arr2].sort((a,b) => a - b)
// }

// console.log(mergeArrays(array1,array2))

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = []

//     if (num <= 0) return 'Please enter positive integer'

//     for (let i = 0; i<num; i++){
//         arr.push(fib1)
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(0))

// let fibonacciSequence = (num) => {
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer'
//     if (num === 1) return arr[0]
//     if (num === 2) return arr

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b,0))
//         num--
//     }
//     return arr
// }

// console.log(fibonacciSequence(2))

// let fizzBuzz = (start,end) => {
//     for (let i = start; i <= end; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(1,15)

// let mergeArrays = (arr1,arr2) => {
//     return [...arr1,...arr2].sort((a,b) => a - b)
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// console.log(mergeArrays(array1,array2))

// let fibonacciSequence = (num) => {
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return arr[0];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b, 0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return arr[0];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b,0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (start,end) => {
// for (let i = start; i <= end; i++){
//     console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
// }
// }
// fizzBuzz(5,30)

// let mergeArrays = (arr1,arr2) => {
//     return [...arr1,...arr2].sort((a,b) => a - b)
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// console.log(mergeArrays(array1,array2))

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = []

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i = 1; i<=num; i++){
//         arr.push(fib1)
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib
//     }
//     return arr
// }

// console.log(fibonacciSequence(1))

// let fizzBuzz = (end) => {
//     let num = 0
//     while (num <= end){
//         console.log(num%5 === 0 && num%3 === 0 ? 'FizzBuzz' : num%5 === 0 ? 'Fizz' : num%3 === 0 ? 'Buzz' : num)
//         num++;
//     }
// }

// fizzBuzz(15)

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)

// function fibonacciSequence(num){
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = []

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i = 1; i <= num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return arr[0];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b,0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//     let arr = []

//     for (let i = 1; i <= num; i++){
//         arr.push(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
//     console.log(arr)
// }

// fizzBuzz(15)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// mergeArrays(array1,array2)

// let fibonacciSequence = (num) => {
//   let fib1 = 0;
//   let fib2 = 1;
//   let nextFib;
//   let arr = [];

//   if (num <= 0) return "Please enter positive integer";

//   for (let i = 0; i < num; i++) {
//     arr.push(fib1);
//     nextFib = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = nextFib;
//   }
//   return arr;
// };

// console.log(fibonacciSequence(10))

// function fibonacciSequence(num){
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return arr[0];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b, 0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(15))

// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// function mergeArrays(arr1,arr2){
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// mergeArrays(array1,array2)

// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return arr.slice(0,-1)
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b,0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = [];

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i = 1; i <= num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(20)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// mergeArrays(array1,array2)

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

// console.log(fibonacciSequence(1))

// function fibonacciSequence(num){
//     let fib1 = 0;
//     let fib2 = 1;
//     let arr = [];

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i = 0; i < num; i++){
//         arr.push(fib1);
//         let nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(100)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// mergeArrays(array1,array2)

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

// let fibonacciSequence = (num) => {
//     let arr = [];
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i = 1; i <= num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(30))

// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(20)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// mergeArrays(array1,array2)

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

// console.log(fibonacciSequence(10))

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

// console.log(fibonacciSequence(15))

// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// mergeArrays(array1,array2)

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = [];

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i = 1; i <= num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let arr = [0,1];

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

// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// mergeArrays(array1,array2)

// let fibonacciSequence = (num) => {
//     let f1 = 0;
//     let f2 = 1;
//     let nextFib;
//     let arr = []

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i = 1; i <= num; i++){
//         arr.push(f1);
//         nextFib = f1 + f2;
//         f1 = f2;
//         f2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b,0))
//         num --;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// mergeArrays(array1,array2)

// let fibonacciSequence = (num) => {
//     let f1 = 0;
//     let f2 = 1;
//     let nextFib;
//     let arr = []

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i = 1; i <= num; i++){
//         arr.push(f1);
//         nextFib = f1 + f2;
//         f1 = f2;
//         f2 = nextFib;
//     }
//     return arr
// }

// let fibonacciSequence = (num) => {
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b,0))
//         num --;
//     }
//     return arr
// }

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)

// let fizzBuzz = (start,end) => {
//     for ( let i = start; i <= end; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i   )
//     }
// }

// fizzBuzz(10,30)

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = [];

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i = 1; i <= num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr

// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]]
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b,0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(5))

// let fizzBuzz = (num) => {
//     let arr = []
//     for (let i=1; i<=num; i++){
//         arr.push(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i  )
//     }
//     console.log(arr)
// }

// fizzBuzz(30)

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b   ))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)

// let fibonacciSequence = (num) => {
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]]
//     if (num === 2) return arr

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b,0 ))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// function fibonacciSequence(num){
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = []

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i=1; i<=num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//     for ( let i=1; i<=num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i   )
//     }
// }

// fizzBuzz(30)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a+b))
// }

// mergeArrays(array1,array2)

// let fibonacciSequence = (num) => {
//     let arr = [0,1]

//     if (num <= 0) return 'Please entere positive integer';
//     if (num === 1) return [arr[0]]
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b,0))
//         num--;

//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//   let fib1 = 0;
//   let fib2 = 1;
//   let nextFib;
//   let arr = [];

//   if (num <= 0) return "Please enter positive integer";

//   for (let i = 1; i <= num; i++) {
//     arr.push(fib1);
//     nextFib = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = nextFib;
//   }
//   return arr;
// };

// console.log(fibonacciSequence(10))

//Write a function that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.

// let str = 'Would you like to go with me to a football game this weekend?'

// let vowelsToNum = (str) => {
//    return str.replace(/[aeiou]/g, (v,i) => i + 1)
// }

// console.log(vowelsToNum(str))

// let fizzBuzz = (num) => {
//     for (let i=1; i<=num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// mergeArrays(array1,array2)

// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter postive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b,0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = []

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i=0; i<num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//     for (let i=0; i<num; i++){
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
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b,0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = [];

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i=1; i<=num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//     for (let i=0; i<num; i++){
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
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b,0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = [];

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i=1; i<=num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//     for (let i=0; i<=num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(10)

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
//         arr.push(arr.slice(-2).reduce((a,b) => a+b))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 =1;
//     let nextFib;
//     let arr = [];

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i=1; i<=num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//     for (let i=0; i<num; i++){
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
//     if (num === 1) return [arr[0]]
//     if (num === 2) return arr

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b,0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = [];

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i=0; i<num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//     for (let i=0; i<=num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(10)

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)

// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]]
//     if (num === 2) return arr

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b,0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = [];

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i=0; i<num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//     for (let i=0; i<=num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(10)

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// mergeArrays(array1,array2)

// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]]
//     if (num === 2) return arr

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b,0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = [];

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i=0; i<num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//     for (let i=1; i<=num; i++){
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
//         arr.push(arr.slice(-2).reduce((a,b) => a+b))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = []

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i=0; i<num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(0))

// let fizzBuzz = (num) => {
//     for (let i=1; i<=num; i++){
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
//     let arr = [0,1]

//     if (num <= 0) return 'Please enter positive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a+b,0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

// Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

// function Xbonacci(signature,n){
//     let nacci = signature.length
//     let complete = n - nacci;

//     if (n < nacci) return signature.slice(0,n)

//     for (let i=0; i<complete; i++){
//       signature.push(signature.slice(-nacci).reduce((a,b) => a+b))
//     }
//     return signature
//   }

// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

// let incrementer = (nums) => {
//     return nums.map((n,i) => (n+i+1)%10)
//   }

//Write a function that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.

// let vowel2index = (str) => {
//     return str.replace(/[aeiou]/gi, (n,i) => i + 1)
// }

// let string = 'Hey I want to go to the game tonight.'

// console.log(vowel2index(string))

//Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

//You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

//nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

//"abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

//Input will only contain lowercase characters and spaces.

// function wordValue(a) {
//     return a.map((s, i) => (i + 1) * s.split``.reduce((s, n) => s + 1 + 'abcdefghijklmnopqrstuvwxyz'.indexOf(n), 0));
//   }

// let fibonacciSequence = (num) => {
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;
//     let arr = [];

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i=0; i<num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// let fizzBuzz = (num) => {
//     for (let i=1; i<=num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// Define a method/function that removes from a given array of integers all the values contained in a second array.

// Array.prototype.remove_ = function(x,y){
//     return x.filter((e) => !y.includes(e))
//   }

//Jumping number is the number that All adjacent digits in it differ by 1.
//Given a number, Find if it is Jumping or not .

// function jumpingNumber(n) {
//     const digitStr = n.toString();

//     for (let i = 1; i < digitStr.length; i++) {
//       if (Math.abs(digitStr[i] - digitStr[i - 1]) !== 1) {
//         return 'Not!!';
//       }
//     }

//     return 'Jumping!!';
//   }

//Create a function that takes a number as an argument and returns a grade based on that number.

// function grader(n) {
//     return n > 1 || n < 0.6 ? 'F' : n >= 0.9 ? 'A' : n >= 0.8 ? 'B' : n >= 0.7 ? 'C' : 'D'
//   }

// The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

// A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).

// We will write a function gap with parameters:

// g (integer >= 2) which indicates the gap we are looking for

// m (integer > 2) which gives the start of the search (m inclusive)

// n (integer >= m) which gives the end of the search (n inclusive)

// In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.

// So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).

// const isPrime = num => {
//     for (let i = 2; i <= num ** .5; i++) {
//       if (!(num % i)) return false;
//     }
//     return num > 1;
//   };

//   const gap = (g, m, n) => {
//     while (m + g <= n) {
//       if (isPrime(m) && isPrime(m + g) && ![...Array(g - 1)].some((_, idx) => isPrime(m + ++idx))) return [m, m + g];
//       m++;
//     }
//     return null;
//   };

// Write a function that accepts a number (num) as an argument, that determines if the given number is prime or not. If the given number is a prime number, return "num is a prime number!", if it is not return, "num is not a prime number."

// let isPrime = (num) => {
//     if ( num <= 1) return `${num} is not a prime number.`

//     for (let i=2; i<=Math.sqrt(num); i++){
//         if (num%i == 0) return `${num} is not a prime number.`
//     }
//         return `${num} is a prime number!`
// }

// console.log(isPrime(52))

// let fizzBuzz = (num) => {
//     for (let i=1; i<=num; i++){
//         console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
//     }
// }

// fizzBuzz(30)

// let array1 = [1,3,5,7,9]
// let array2 = [2,4,6,8,10]

// let mergeArrays = (arr1,arr2) => {
//     console.log([...arr1,...arr2].sort((a,b) => a - b))
// }

// mergeArrays(array1,array2)

// let fibonacciSequence = (num) => {
//     let arr = [0,1];

//     if (num <= 0) return 'Please enter postiive integer';
//     if (num === 1) return [arr[0]];
//     if (num === 2) return arr;

//     while (num > 2){
//         arr.push(arr.slice(-2).reduce((a,b) => a + b,0))
//         num--;
//     }
//     return arr
// }

// console.log(fibonacciSequence(10))

// function fibonacciSequence(num){
//     let arr = [];
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextFib;

//     if (num <= 0) return 'Please enter positive integer';

//     for (let i=0; i<num; i++){
//         arr.push(fib1);
//         nextFib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextFib;
//     }
//     return arr;
// }

// console.log(fibonacciSequence(10))

// let tribonacciSequence = (num) => {
//   let arr = [0, 1, 1];

//   if (num <= 0) return "Please enter positive integer";
//   if (num === 1) return [arr[0]];
//   if (num === 2) return [arr[0], arr[1]];
//   if (num === 2) return arr;

//   while (num > 3) {
//     arr.push(arr.slice(-3).reduce((a, b) => a + b, 0));
//     num--;
//   }
//   return arr;
// };

// console.log(tribonacciSequence(8));

let fizzBuzz = (num) => {
    for (let i=1; i<=num; i++){
        console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
    }
}

fizzBuzz(30)
