function missingNumberInArray(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n+1)) /2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

console.log(missingNumberInArray([1,2,3,5])); // Output: 4