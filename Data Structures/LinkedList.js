//10-->6-->18
class NewNode{
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LinkedLists{
    constructor(value){
        this.head = {
            value : value,
            next : null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        var newNode = new NewNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
        var newNode = new NewNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length ++
    }

    traverse(index){
        //find the previous point in which we going to do the operation
        var leader = this.head;

        for(var i = 0; i < index - 1; i ++){
            leader = leader.next
        }
        return leader;
    }

    insert(index, value){
        if(index < 0) 
            return console.error("index should be greater than 0");

        if(index > this.length) 
            return this.append(value);

       if(index == 0) 
            return this.prepend(value);

        var leader = this.traverse(index);

        var after =  leader.next;

        var newNode = new NewNode(value);
        newNode.next = after;
        leader.next = newNode;
        this.length++;
    }

    remove(index){
        var leader =  this.traverse(index);
        var after =  leader.next;
        leader.next = after.next;
        this.length--;
    }

    reverse(){
         //1,2,3,4
       if(!this.head.next) return this.head;

       let first = this.head; //1
       this.tail = this.head;
       let second = first.next; //2

       while(second){
        const third = second.next; //3    //4
        second.next = first; //2->1    //3->2->1
        first = second; //2->1    //3->2->1
        second = third; //3->2->1 
       }

       this.head.next = null;
       this.head = first;
    }

    get(){
        const array = [];
        let currentNode = this.head;

        while(currentNode){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
}


const linkedLists = new LinkedLists(10);
linkedLists.prepend(98);
linkedLists.append(18);
linkedLists.append(22);
linkedLists.insert(0,19);
console.log(linkedLists.get());
linkedLists.reverse();
console.log(linkedLists.get());


class DoublyLinkedLists{
    constructor(value){
        this.head = {
            value : value,
            next : null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        var newNode = new NewNode(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
        var newNode = new NewNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length ++
    }

    traverse(index){
        //find the previous point in which we going to do the operation
        var leader = this.head;

        for(var i = 0; i < index - 1; i ++){
            leader = leader.next
        }
        return leader;
    }

    insert(index, value){
        if(index < 0) 
            return console.error("index should be greater than 0");

        if(index > this.length) 
            return this.append(value);

       if(index == 0) 
            return this.prepend(value);

        var leader = this.traverse(index);
        var follower =  leader.next;
        var newNode = new NewNode(value);
        
        leader.next = newNode;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
        console.log(this)
        this.length++;
    }

    remove(index){

        if(index < 0){
            return console.error("index should be greater than 0");
        }
        if(index > this.length){
            return console.error("index should be less than the total length");
        }

        var leader =  this.traverse(index);
        var follower =  leader.next;
        follower.prev = leader;
        leader.next = follower.next;
        this.length--;
    }

    get(){
        const array = [];
        let currentNode = this.head;

        while(currentNode){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
}


const doublylinkedLists = new DoublyLinkedLists(10);
doublylinkedLists.append(18);
doublylinkedLists.append(20);
doublylinkedLists.prepend(1);
doublylinkedLists.insert(1,2);

