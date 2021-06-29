var stack1 = []
var stack2 = []

function enqueue(num){
    stack1.push(num)
};
function dequeue(){
    if(stack2.length === 0){
        if(stack1.length === 0) return "Empty Queue..!"
        while(stack1.length>0){
            var num = stack1.pop();
            stack2.push(num)
        }
    }
    return stack2.pop()
}

enqueue(1);
enqueue(2);
enqueue(3);
enqueue(4);
console.log(dequeue())
console.log(dequeue())
