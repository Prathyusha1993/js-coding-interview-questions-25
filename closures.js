function outer() {
    let outerVar = 'pinky';
    function inner() {
        let innerVar = 'hello';
        return `${innerVar} ${outerVar}`;
    }
    return inner();
}
const out = outer();
console.log(out); //hello pinky


function outer2(outerVar) {
    return function inner2(innerVar){
        console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
}

const closureFunc = outer2('how are you');
closureFunc('Navitha');