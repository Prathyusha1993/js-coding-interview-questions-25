class QueueWithStacks {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }
    enqueue(value){
        this.inStack.push(value);
    }
    dequeue(){
        if(this.outStack.length === 0){
            while(this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack.pop();
    }
    peek(){
        if(this.outStack.length === 0){
            while(this.inStack.length > 0){
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack[this.outStack.length - 1];
    }
    isEmpty(){
        return this.inStack.length === 0 && this.outStack.length === 0;
    }
}

const q = new QueueWithStacks();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue());
console.log(q.peek());