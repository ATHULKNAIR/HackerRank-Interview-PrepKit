// add(1,2)
// add(1)(2)

//  create a function that gives result if called anyway


function add(num1,num2){
    if(num1 && num2){
        return num1+num2
    }else{
        return function(num3){
            return num1+num3
        }
    }
}

console.log(add(1,2))
console.log(add(1)(2))

/// Sum(1)(2)(3)(4) -----> 10


let Sum = a => b => b? Sum(a+b):a;

console.log(Sum(10)(2)(3)(4)())