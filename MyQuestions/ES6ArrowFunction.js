 // regular function if not have this of its own, it will be displayed undefined

 var x =function(){
     this.val = 1;
     setTimeout(function(){
         this.val++;
         console.log(this.val)
     },1)
 };

 var xx = new x(); // gives output as NaN

 // it doesnot recognize the outer this.

 // it can be resolved using arrow function

 var y =function(){
     this.val = 1;
     setTimeout(()=>{
         this.vale++
         console.log(this.val)
     },1)
 }

 var yy = new y()


 /// Find the output
var x1 = function(){
    console.log(arguments[0])
}
x1(1,2,3)  // ----------->  1 
// but the arrow function wil not give this output
// for getting the output in arrow function
 
var y1 = (...n)=>{
    console.log(n[0])
}
y1(1,2,3)



///////////////////////// CALL APPLY BIND METHOD ///////////////////////////////////

var obj = {num : 2}

var addToThis = function (a){
    return this.num+a;
}
console.log(addToThis.call(obj,2))

var addToThis = function (a,b,c){
    return this.num+a+b+c;
}
console.log(addToThis.call(obj,2,3,4))

// call attatches the function to the object temperorily and runs and give the result back


/// apply  ////
var arr = [1,2,3]
console.log(addToThis.apply(obj,arr))
// when we use apply, we dont want to pass all the argument , we can combine all the argument in an array

/// in a glance


// var obj2 = {num : 3}

// var functionName = function(arg1,arg2,arg3){
//     return this.num + arg1 +arg2 +arg3    
// };

// functionName.call(obj,arg1,arg2,arg3);

// functionName.apply(obj,[arg1,arg2,arg3]);

// var bound =functionName.bind(obj2)
// bound(arg1,arg2,arg3)



// find the output

function b(){
    var myVar;
    console.log(myVar)  // --------> undefined
}
function a(){
    var myVar = 2;
    console.log(myVar)  // ----------> 2

    b();
}
var myVar = 1;
a();
console.log(myVar)      // ------>  1
