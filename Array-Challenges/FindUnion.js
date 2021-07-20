const removeDuplicates = (arr,newArr = [])=>{
    newArr = [...new Set(arr)];
    return newArr;
}

const concat = (...array)=>{
    let newArr = [];
    newArr =[...array.flat()]
    return newArr
}

let arr1 = [1,2,1,2];
let arr2 = [2,2,4];
let arr3 = [2,1,1,1,2,3]
console.log(removeDuplicates(concat(arr1,arr2,arr3)));
