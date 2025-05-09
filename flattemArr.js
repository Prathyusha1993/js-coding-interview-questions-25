const flattenArr = (arr) => arr.flat(Infinity);
console.log(flattenArr([1, [2, 3], [4, [5, 6]], 7]));

function flattenArray(arr) {
    const result = [];
    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...flattenArray(item));
        }else {
            result.push(item);
        }
    }
    return result;
}
console.log(flattenArray([1, [2, 3], [1,2, [3]], 4,5, [6,7]]));