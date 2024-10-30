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


let fizzBuzz = (start,end) => {
    for (let i = start; i <= end; i++){
        console.log(i%5 === 0 && i%3 === 0 ? 'FizzBuzz' : i%5 === 0 ? 'Fizz' : i%3 === 0 ? 'Buzz' : i)
    }
}

fizzBuzz(5,40)