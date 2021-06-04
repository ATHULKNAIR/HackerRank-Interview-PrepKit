class Queue{
    constructor(size){
        this.items = [];
        this.size = size;
    }
    enqueue(item){
        if(!this.isFull()){
            return this.items.unshift(item)
        }
    }
    
    dequeue(){
        if(!this.isEmpty()){
            return this.items.pop()
        }
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.items.length-1]
        }
    }
    isEmpty(){
        return this.items.length === 0
    }
    isFull(){
        return this.items.length === this.size
    }
    print(){
        if(!this.isEmpty()){
            var index = this.items.length-1;
            while(index>=0){
                console.log(this.items[index]);
                index--;
            }
        }else{
            console.log("Empty Queue..!")
        }
    }
}

var q = new Queue(4);

q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

q.print()
// console.log(q.peek())
console.log("Removing....")
q.dequeue();
q.enqueue(6)
q.print()