function isFactorial(num) {
    if(num<=1) return 1;
    return num * isFactorial(num-1);
}

console.log(isFactorial(5));


// Factorial using iterative approach
function factorialIterative(num) {
    let result = 1;
    for(let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialIterative(5));