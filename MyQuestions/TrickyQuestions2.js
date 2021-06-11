// find the output
console.log([]+[])   //  ------------------->  this will give us a emty string
console.log({}+{})   //  ------------------->  [object Object][object Object]
// because first we convert it into a string 
 console.log(String([])) // --> this is a empty String.. so two empty string gives an empty string
 // because when we convert it to string
 console.log(String({}))  // --->  this gives [object Object]


 // find the output of the code
function a(){
    return "hello"
}
let sentence = a("hi");
console.log(sentence)  // -------> hello
// since the function takes no arguments.. it just returns hello


// How can u change the contents of a website
// document.body.contentEditable = true; ------------>  writing this in the console of website will make it editable


// find the output of the code 
console.log(("hi"))                               //  ------> hi
console.log(("hi").__proto__)                     // -------> {}  // creator of hi ---> String
console.log(("hi").__proto__.__proto__)           // -------> [Object]  // creator of String ---> Object
console.log(("hi").__proto__.__proto__.__proto__) // -------> null  // Object is topmost.it has no creator


// find output and make corrections
var A = {
    x : function(){
        console.log('x')
        // return this
    },
    y : function(){
        console.log('y')
        // return this
    },
    z : function(){
        console.log('z')
        // return this
    }
}
// A.x().y().z()        // -----------> it will give error
// what should be done to make it print x y and z -------------->  return A or this after inside every function


//  Var and let

//    1) Var is used since the begining of Javascript
//       Let is introduces in Es6
//    2) Var is function scope. it dies where the function ends
//       Let is block scope. It ends where the block of code ends 
//          Eg:
                let x1 = function(){
                    if(true){
                        var v ='var';
                        let l = 'let'
                    }
                    // console.log(v);         // -----------> var
                    // console.log(l);         // -----------> ReferenceError: l is not defined
                }
                x1()
//    3) Var gets hoisted on top of its function
//       Let get not get hoisted
//          Eg:
                let x2 = function(){
                    if(true){
                        // console.log(v);         // -----------> undefined
                        // console.log(l);         // -----------> ReferenceError: cannot access l before initialization
                        var v ='var';
                        let l = 'let'
                    }
                }
                x2()
        // So let is exist from its definition to the scope ending, while var exits even before it is defined


// difference between '==' and '==='
//  '==' is a comparison operator --> compares only the value , not the type
          if('1'==1){} //  ------> gives true , because the value is same. the number 1 is converted into string 1 and then compared
//  '===' is also a comparison operator --> compares both the value and type
          if('1'===1){} // ------> gives false, because the types are not equal


// difference between let and const
//  1)  Const , after it is assigned a value, it cannot be reassigned again
//         -------->  const c = 1;
//                          c = 2  ------> c cannot be reassigned
//         -------->  const c;
//                          c = 2; ------> Missing initializer in c
//      Let , will let you to reassign the value.. but cannot redeclare the variable 
//         ---------> let x = 1;
//                        x = 3;   --> let can be re-assigned
//                    let x = 2;   --> gives error...cannot be re-declared
//
//     but we can add or remove elements in array which is const type, but we cannot re-assign
        const array = [1,2]
        array.push(3)
        console.log(array)  // --------> [1,2,3]
 //     array = [1,2,3,4]
 //     console.log(array)  // --------> TypeError : Assignmnt to constant variable



 // difference between 'null' and 'undefined'
 //   1) 'null' --> represents empty value, this is the value that we assign to a variable
 //      'undefined' --> represents empty value, the variable is defined but not assigned a value , it automatically puts a placeholder
 //   2)  typeOf(null) --> object
 //       typeOf(undefined) --> undefined      


// What is prototype based Inheritance
//      Basically every object has a property called Prototype and we can add methods and properties to it.
//  when we create other objects from this object,the newly created object will automatically inherit the property of its parent
//  But not by incluidng in its own property but instead it uses from its parents prototype properties and methods
//      The way it works is when we call a particular method on an object, it first looks at its own properties to see 
//  if its there,then it will look at its parent and if it finds it there, it will execute it.
//  So this way, the objects gets much lighter, it doesnot need to carry every method on its own--------> this is prototype inheritance means
// eg: 
    let car = function(model){
        this.model = model
    }
    car.prototype.getModel=function(){
        return this.model
    }
    let velar = new car('Range Rover')
    console.log(velar.getModel())
    // this is prototype inheritance


// difference between 'function decleration' and 'function expression'
//   1)  function decleration has a function and a function name it has no variable ----> function decl(){}
//       function expression is an anonymous function saved into a varable -----> let expr = function(){} 
// Eg: 
    // console.log(decl());   //---------->  function decleration
    // console.log(expr());   //---------->  ReferenceEror : cannot access expr() before initialization
      function decl(){
          return "Function decleration"
      }
      let expr = function(){
          return "Function expression"
      }
//   2)  function decleration is available even before the fucntion is declared or defined
//       But function expression cannot be accessed before its initialization , 
//        because it is saved into a variable, it behave like a variable ,and it has a variable scope

