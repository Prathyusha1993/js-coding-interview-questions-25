const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 2, 4, 2, 4]));

// using filter:
function removeDuplicates1(arr){
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates1([1,2,2,1,3]));
console.log(removeDuplicates1(['h', 'e', 'l', 'l', 'o']));
