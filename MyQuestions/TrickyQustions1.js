

console.log(2 + '2')        //  22
console.log(2 - '2')        //  0

// Because - is a number operator, it converts the string to number
// + is both number as well as string operator. it concats the data types. so 22


console.log(2 < 4 < 8)      // true
console.log(8 > 4 > 2)      // flase

// 2 < 4 gives true   so , true < 8  true has value 1, so 1 < 8 gives true
// 8 > 4 gives true   because, true has value 1  , 1 > 2 gives false

let array = [1,2,1,3,5,2,6]   //  Remove duplicates with best time complexity
console.log([...new Set(array)])

// Set is a new data structure introduced in es6 ..it only keeps unique items

let a = ()=>{return arguments}     
console.log(a("hi"))

let b = function(){return arguments}
console.log(b("hi"))

//  arguments doesnot bind to arrow functions , if u need to run that ,then  make it
//  let a =(...n)=>{return n}

let x = function(){
    return 
    {
        message:'hi'
    }
}
console.log(x())     //  this will give undefined

// this is because .. return and the returning item should be in same line...
//  return {
    // message: "hi"}



// let profile = {
//     name : 'Athul'
// }
// profile.age = 3
// console.log(profile)    // gives result ---> {name : 'Athul', age : 3}

// donot allow other person to add more properties to our object

let profile = {
    name : 'Athul'
}
Object.freeze(profile)
profile.age = 3
console.log(profile) // Now noOne can add more properties to our object.... it is freezed.we use Object.freeze()

// We need to modify the bject but donot want to add more properties ?

let profile2 = {
    name : 'Athul'
}
Object.seal(profile2)
profile2.name = 'Athul K Nair'
profile2.age = 3
console.log(profile2)  // Now we can modify our property..but cannot add property ..... we use Object.seal()

// we need to add a new property and it cannot be changed later.

let profile3 = {
    name : "Athul"
}
Object.defineProperty(profile3,'age',{
    value:3,
    writable:false
})
profile3.name = "Athul K Nair"
profile3.age = 4

console.log(profile3)

// find the output of code

console.log(Math.max())

