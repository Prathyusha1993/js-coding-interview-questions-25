function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

function reverse(str){
    return str.split('').reverse().join('');
}
console.log(reverse('bottle'));

// using builtin methods:
function reverse1(str){
    let reversed = '';
    for(let char of str){
        reversed = char + reversed;
    }
    return reversed;
}
console.log(reverse1('coconut'));

// using recursion:
function reverse2(str){
    if(str === ''){
        return '';
    }else {
        return reverse2(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverse2('passion'));  //noissap


// using spread operator:
function reverse3(str){
    return [...str].reduce((reversed, character) => character + reversed, '');
}
console.log(reverse3('apple'));  //elppa