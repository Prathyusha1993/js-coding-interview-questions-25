function isPrime(n) {
    if(n <= 1) return false;
    if(n <= 3) return true;
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(13));

// is prime recursive:
function isPrimeRecursive(n, divisor=2) {
    if(n < 2) return false;
    if(divisor > Math.sqrt(n)) return true;
    if(n % divisor === 0) return false;
    return isPrimeRecursive(n, divisor + 1);
}
console.log(isPrimeRecursive(7));
console.log(isPrimeRecursive(13));
console.log(isPrimeRecursive(2));
console.log(isPrimeRecursive(21));

// another way:
function isPrimeOptimized(n) {
    if (n <= 1) return false;
    if( n === 2) return true;
    if (n % 2 === 0) return false;
    for(let i=3; i<= Math.sqrt(n); i+=2){
        if(n % i === 0) return false;
    }
    return true;
}

console.log(isPrimeOptimized(37));
console.log(isPrimeOptimized(12));