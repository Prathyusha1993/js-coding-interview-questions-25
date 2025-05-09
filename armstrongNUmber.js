function armstrongNumber(num) {
    const digits = num.toString().split('');
    const power =digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    return sum === num;
}

console.log(armstrongNumber(153));
console.log(armstrongNumber(125));