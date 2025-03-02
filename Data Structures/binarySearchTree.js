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
}

var tree  = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
console.log(tree.lookup(20));

function traverse(node){
    if(node == null) return;
    const tree  = {value: node.value};
    tree.left = node.left === null ? null :traverse(node.left);
    tree.right = node.right === null ? null :traverse(node.right);
    return tree;
}