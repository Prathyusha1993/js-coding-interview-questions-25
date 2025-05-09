Function.prototype.myBind = function(context, ...args) {
    const fn = this;
    return function(...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    }
}


// example:
function greet(greetings, name){
    console.log(`${greetings}, ${name}`);
}

const sayGreet = greet.myBind(null, 'Hello');
sayGreet('Pinky');
