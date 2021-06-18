class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null
    }
}
class Tree{
    constructor(){
        this.root = null
    }
    findCommonAncestor(parent, child1, child2) {
        while (parent != null) {
            if (parent.data > child1 && parent.data > child2) {
                return this.findCommonAncestor(parent.left, child1, child2)
            }
            else if (parent.data < child1 && parent.data < child2) {
                return this.findCommonAncestor(parent.right, child1, child2)
            } else {
                break;
            }
        }
        return parent.data;
    
    }
}

let t = new Node(6);
t.left = new Node(4);
t.right = new Node(8);
t.left.left = new Node(2)
t.left.right = new Node(5)
t.right.left = new Node(7);
t.right.right = new Node(9);
t.left.left.left = new Node(1);
t.left.left.right = new Node(3);

const t1 =new Tree();
t1.root = t

console.log(t1.findCommonAncestor(t, 1, 9));

