class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.righ = null;
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    isValidBST(node, min = null, max = null) {
        if (!node) return true;
        if (max !== null && node.data >= max) {
            return false;
        }
        if (min !== null && node.data <= min) {
            return false;
        }
        const leftSide = this.isValidBST(node.left, min, node.data);
        const rightSide = this.isValidBST(node.right, node.val, max);

        return leftSide && rightSide;
    }
}

const t = new Node(6);
t.left = new Node(4);
t.left.left = new Node(2);
t.left.right = new Node(5);
t.right = new Node(8);
const t1 = new Tree();
t1.root = t;
console.log(t1.isValidBST(t));