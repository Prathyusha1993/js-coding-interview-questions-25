function groupAnagrams(words) {
    const map = {};
    for(let word of words){
        const sortedWord = word.split('').sort().join('');
        if(!map[sortedWord]) map[sortedWord] = [];
        map[sortedWord].push(word);
    }
    return Object.values(map)
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
console.log(groupAnagrams(['listen', 'silent', 'race', 'care'])); // [['listen', 'silent', 'enlist', 'inlets']]