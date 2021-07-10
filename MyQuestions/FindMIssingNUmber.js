const array = [10,5,4,7,2,9,1,3,6]  

// One number is missing  .. find it



let n = array.length+1;
let total = n * (n+1)/2;
 
let arrayTotal = array.reduce((t,i)=> t+i);
console.log("Missing Number : "+(total-arrayTotal))

////////////////////////////////////////

let arr = array.sort((a,b)=> a-b)

for(let i = 0; i<arr.length;i++){
    if(arr[i] !== i+1){
        return console.log("Missing Number : "+(i+1))
    }
}




