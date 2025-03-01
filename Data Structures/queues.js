class Nodee {
    constructor(value){
        this.value =  value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }

    enqueue(value){
        var node = new Nodee(value);
        if(this.isEmpty()){
            this.first = node;
            this.last = node;
        }
        else{
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return this; 
    }

    dequeue(){
        if(this.length == 0) return;

        if(this.length == 1){
            this.first = null;
            this.last = null;
        }
        else{
            const holdingPointer = this.first.next;
            this.first = holdingPointer;
        }
        this.length--;
        return this;
    }

    isEmpty(){
        return this.length == 0   ;
    }
}

const queue = new Queue();

console.log(queue.enqueue("google"));
console.log(queue.enqueue("udemy"));
console.log(queue.enqueue("youtube"));
console.log(queue.dequeue());