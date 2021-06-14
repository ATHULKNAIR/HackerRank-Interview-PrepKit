function fibonacci(n) {

    if(n ===0) return 0
    if(n ===1) return 1
    return fibonacci(n-2)+fibonacci(n-1)
    
}

function fibonacciIterative(num){
    var a = 0;
    var b = 1;
    var result = 0;
    for(let i=0;i<num;i++){
        result = a + b;
        a = b;
        b = result;
    }
    return a
}

console.log(fibonacci(7))
console.log(fibonacciIterative(7))