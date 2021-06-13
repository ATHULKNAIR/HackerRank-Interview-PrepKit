let x = [1,2,2,4,2,4]

let maxNum = Math.max(...x)
console.log(maxNum)

let count = 0;
for(let i = 0; i<x.length;i++){
    if(x[i] === maxNum){
        count++
    }
}
console.log(count)