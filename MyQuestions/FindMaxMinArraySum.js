const array = [1,2,3,4,5];

// if we take out 1 ---- sum will be 14
// if we take out 2 ---- sum will be 13

// like wise find the masx and min sum 


function findMaxMin(arr){
    let smallNum = Math.min(...arr)
    let largeNum = Math.max(...arr)

    let arrayTotal = arr.reduce((total,i)=>total+i);
    let minSum = arrayTotal - largeNum;
    let maxSum = arrayTotal - smallNum;
    return [minSum,maxSum]
}

console.log(findMaxMin(array))