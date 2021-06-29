/// Sum(1)(2)(3)(4) -----> 10


let Sum = a => b => b? Sum(a+b):a;

console.log(Sum(10)(2)(3)(4)())