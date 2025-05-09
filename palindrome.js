function palindrome(str){
    let left = 0, right = str.length-1;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(palindrome('racecar'));  //true
console.log(palindrome('pinky'));

function palindrome2(str){
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(palindrome2('level'));
console.log(palindrome2('hello'));

// using recursion:
function palindrome3(str){
    if(str.length <= 1){
        return true;
    }
    if(str[0] !== str[str.length-1]){
        return false;
    }
    return palindrome3(str.slice(1, -1));
}

console.log(palindrome3('madam'));
console.log(palindrome3('world'));
console.log(palindrome3('hi'));