class Node{
    constructor(value){
        this.data = value;
        this.right =null;
        this.left =null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }
    findHeigth(node){
        if(node ==null){
            return 0;
        }else{
            let leftHeight = this.findHeigth(node.left);
            let rightHeight = this.findHeigth(node.right)
    
            if(leftHeight>rightHeight){
                return (leftHeight+1);
            }else{
                return (rightHeight+1)
            }
        }
    }
}

let a = new Node(1);
a.left = new Node(2);
a.right = new Node(3);
a.left.left = new Node(4);
a.left.left.left = new Node(5);

const t1 =new Tree();
t1.root = a;


console.log(t1.findHeigth(a))
