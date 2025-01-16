const fibonacciSequence = (num) => {
    let arr = [0,1];

    if (num <= 0) return 'Please enter positive integer';
    if (num === 1) return [0];
    if (num === 2) return arr;

    while (num > 2){
        arr.push(arr.slice(-2).reduce((a,b) => a + b))
        num--;
    }
    return arr
}


console.log(fibonacciSequence(10))