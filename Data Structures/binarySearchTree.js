class Nodee {
    constructor(value){
        this.left =null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        var node  = new Nodee(value);

        if(!this.root) {
            this.root = node;
            return this;
        }
        
        this.traverseInsert(this.root, node);
        return this;
    }

    traverseInsert (root, node){
        if(node.value > root.value){ 
            if(root.right == null){
                root.right = node;
            }
            else{
                this.traverseInsert(root.right, node)
            }
        }else{
            if(root.left == null){
                root.left = node;
            }
            else{
                this.traverseInsert(root.left, node)
            }
        }
    }

    traverseLookup (root, value){
        if (!root || root.value === value) return root; // ✅ Directly return if null or found

        return value > root.value
            ? this.traverseLookup(root.right, value)  // ✅ Ternary operator for cleaner code
            : this.traverseLookup(root.left, value);
    }

    lookup(value){
        return this.traverseLookup(this.root, value)
    }
//     9
//     / \
//    4   20
//   / \  /  \
//  1   6 15  170

    remove(value){
        //todo read in future
    }

    bfs(){
        let currentNode = this.root;
        let list  = []; 
        let queue = [];
        queue.push(currentNode);

        while(queue.length > 0){
           currentNode = queue.shift();
           list.push(currentNode.value);
           
           if(currentNode.left){
                queue.push(currentNode.left); 
           }

           if(currentNode.right){
                queue.push(currentNode.right); 
           }
        }

        return list;
    }

    DFSInOrder(){
        return this.traverseInOrder(this.root, []);
    }

    traverseInOrder(node, list){
        if(node.left)
            this.traverseInOrder(node.left, list);

        list.push(node.value);

        if(node.right)
            this.traverseInOrder(node.right, list);

        return list;
    }

    DFSPostOrder(){
        return this.traversePostOrder(this.root, []);
    }

    traversePostOrder(node, list){
        if(node.left)
            this.traversePostOrder(node.left, list)
        if(node.right)
            this.traversePostOrder(node.right, list)
        list.push(node.value);
        return list;
    }

    
    DFSPreOrder(){
        return this.traversePreOrder(this.root, []);
    }

    traversePreOrder(node, list){
        list.push(node.value);
        if(node.left)
            this.traversePreOrder(node.left, list)

        if(node.right)
            this.traversePreOrder(node.right, list)

        return list;
    }
}

var tree  = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
tree.lookup(170);
console.log(tree.bfs());
console.log(tree.DFSInOrder());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());

function traverse(node){
    if(node == null) return;
    const tree  = {value: node.value};
    tree.left = node.left === null ? null :traverse(node.left);
    tree.right = node.right === null ? null :traverse(node.right);
    return tree;
}