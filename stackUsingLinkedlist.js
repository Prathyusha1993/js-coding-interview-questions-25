class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class StackLL {
    constructor(){
        this.top = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }
    pop(){
        if(!this.top) return null;
        const value = this.top.value;
        this.top = this.top.next;
        this.length--;
        return value;
    }
    peek(){
        return this.top ? this.top.value : null;
    }
    isEmpty() {
        return this.length === 0;
    }
}