class Stack { //last in first out
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value){
        var node = {
            value :value,
            next: null
        };

        if(this.length == 0){
            this.top = node;
            this.bottom = node;
        }
        else{
           node.next = this.top;
           this.top = node
        }

        this.length++;
        return this;
    }

    pop(){
        if(this.length == 0) return;
        var poppedNode = this.top;
        var remainingNode = this.top.next;
        this.top = remainingNode;
        this.length--;
        if(this.length == 1) this.bottom = null;
        return poppedNode.value;
    }

    peek(){
        return this.top;
    }

    isEmpty(){
        return this.length ==0;
    }
}

var stack = new Stack();

class Queue{//first in first out
    constructor(){
      this.stack1 = new Stack();
      this.stack2 = new Stack();
    }

    enqueue(value){
        this.stack1.push(value);
    }

    dequeue(){
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
              this.stack2.push(this.stack1.pop());
            }
        }
        if (!this.stack2.isEmpty()) {
        return this.stack2.pop();
        }
          return "Queue is empty";
    }

    peek(){

    }
}

var queue = new queue();

console.log(queue.enqueue("google"));
console.log(queue.enqueue("amazon"));
console.log(queue.enqueue("instagram"));

//todo complet this