// function reverseWords(str){
//     console.log(str.split(' ').map((n) => n.split('').reverse().join('')).join(' '))
// }

// let testy = 'yeH uoy doulhs reffo em a !boj'

// reverseWords(testy)

let fibonacciSequence = (num) => {
    let arr = [0,1];

    if (num <= 0) return 'Please enter positive integer';
    if (num === 1) return [arr[0]];
    if (num === 2) return arr;

    while (num > 2){
        let [x,y] = arr.slice(-2);
        arr.push(x + y);
        num--;
    }
    return arr;
}

console.log(fibonacciSequence(10))