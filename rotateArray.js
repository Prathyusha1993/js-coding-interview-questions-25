function rotateArray(arr, k){
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log(rotateArray([1,2,3,4,5], 2)); // [4,5,1,2,3]

// using unshift and pop:
function rotateArray1(arr, k) {
    k = k % arr.length;
    for(let i=0; i<k; i++){
        const lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr;
}

console.log(rotateArray1([2,4,6,8], 2));


// Array.prototype.map:
Array.prototype.myMap = function(callback) {
    let result = [];
    for(let i = 0; i<this.length; i++){
        result.push(callback(this[i], i, this));
    }
    return result;
}

console.log([1,2,3].myMap(x => x * 2));