function mostFrequentElement(arr) {
    const freq = {};
    let maxCount = 0,maxItem;
    for(let item of arr){
        freq[item] = (freq[item] || 0) + 1;
        if(freq[item] > maxCount){
            maxCount = freq[item];
            maxItem = item;
        }
    }
    return maxItem;
  }
console.log(mostFrequentElement([1,2,2,3,3,3,1]));
console.log(mostFrequentElement([1,2,2,1]));
console.log(mostFrequentElement(['a', 'b', 'a', 'c', 'b', 'a']));