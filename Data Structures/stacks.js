class Nodee {
    constructor(value){
        this.value =  value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        var node = new Nodee(value);
        if(this.isEmpty()){
            this.top = node;
            this.bottom = node;
        }
        else{
            const holdingPointer  =  this.top; //youtube
            this.top = node; // udemy 
            this.top.next = holdingPointer;
        }
        this.length++;
        return this; 
    }

    pop(){
        if(this.length == 0) return;

        if(this.length == 1){
            this.top = null;
            this.bottom = null;
        }
        else{
            const holdingPointer = this.top.next;
            this.top = holdingPointer;
        }
        this.length--;
        console.log(this.top);
    }

    isEmpty(){
        return this.length == 0   ;
    }
}

const stack =  new Stack();

stack.push("google");
stack.push("udemy");
stack.push("youtube");

stack.pop();
stack.pop();
stack.pop(); 

stack.isEmpty();