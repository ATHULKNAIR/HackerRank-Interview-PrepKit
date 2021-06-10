
class Stack {
    constructor(size) {
        this.items = [];
        this.size = size;
    }

    add(element) {
        if (!this.isFull()) {
            return this.items.push(element);
        }
    }

    remove() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }
    isFull() {
        return this.items.length === this.size;
    }
    print() {
        if (!this.isEmpty()) {
            var top = this.items.length - 1;
            while (top >= 0) {
                console.log(this.items[top]);
                top--;
            }
        } else {
            console.log("No items to print")
        }
    }
}

let stack = new Stack(5);
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);

console.log("Items in Stack : ");
stack.print()

console.log("Removing item... ");
stack.remove();

console.log("After removing, Items : ");
stack.print()

stack.add(10)

console.log("First Item : " + stack.peek());

console.log(stack.isEmpty());


stack.print()


