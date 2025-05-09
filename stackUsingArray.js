class Stack{
    constructor(){
        this.items = [];
    }

    push(item){
        return this.items.push(item);
    }
    pop(){
        if(this.isEmpty()) return null;
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());
console.log(stack.peek());