// find the output
let x = [1,2,3]
x[-1] = -1
console.log(x[x.indexOf(1000)])  // ---------> -1
// Because x doesnot have a element 1000 , so the index will be -1 , which is given x[-1] =-1


// find the output 
let array = [1,2,15,30,5,45,7];
console.log(array.sort());            // -----> 1,15,2,30,45,5,7     :  because js consider it as string 
console.log(array.sort((a,b)=>a-b))   // -----> 1,2,5,7,15,30,45     :  ascending order
console.log(array.sort((a,b)=>b-a))   // -----> 45,30,15,7,5,2,1     :  descending order

// Find a value of i that gives the desired output
    // let i =? 
    // console.log(i*i)  // ------>   0
    // console.log(i+1)  // ------>   1
    // console.log(i-i)  // ------>  -1
    // console.log(i/i)  // ------>   1
// i  = Number.MIN-VALUE  // ----> this is the smallest number known to js
// console.log(Number.MIN_VALUE) ----> 5e-324
    

// find the output
let arr2 = [1,2,3]+[4,5,6]
console.log(arr2)  // --------> 1,2,34,5,6
// what it does is it conevrts the array into string and it concats them with commas in between them, but no comma after 3 so, 34
let arr3 = [...[1,2,3],...[4,5,6]]
console.log(arr3)  // --------> [1,2,3,4,5,6]
let arr4 = String([...[1,2,3],...[4,5,6]])     
console.log(arr4)   // -------> 1,2,3,4,5,6


// find the output
console.log(NaN === NaN)  // ----->  false
 // because , NaN compared to anything gives false, even with itself
console.log(isNaN(NaN))   // ----->  true
console.log(isNaN('hello')) // ----> true
console.log(isNaN(1)) // ----> false