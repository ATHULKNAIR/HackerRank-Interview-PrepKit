var Array = [1,2,3,4,5,1,2,3,"Athul",4,5,"Athul",1,1]

//  Using filter Method

function removeDupByFilter(newArray){
    return newArray.filter((value,index)=>newArray.indexOf(value)===index)
}

console.log("Removing Duplicates using Filter method ....")
console.log(removeDupByFilter(Array))


//  Using Set Method

function removeDupBySet(newArray){
    return [...new Set(newArray)]
}

console.log("Removing Duplicates using Set method ....")
console.log(removeDupBySet(Array))

//  Using forEach method

function removeDupByforEach(newArray){
    let array = [];
    newArray.forEach(value=>{
        if(!array.includes(value)){
            array.push(value)
        }
    })
    return array
}

console.log("Removing Duplicates using forEach method ....")
console.log(removeDupByforEach(Array))

// Using indexOf method  -----------> O(n^2)

function removeDupByIndexOf(newArray){
    let array = [];
    let len = newArray.length;
    for(let i = 0; i<len;i++){
        if(array.indexOf(newArray[i])=== -1){
            array.push(newArray[i])
        }
    }
    return array;
}

console.log("Removing Duplicates using IndexOf method ....")
console.log(removeDupByIndexOf(Array))


//  Using sort and temp  -----------------> nlog(n) + n

function removeDupBySort(newArray){
    let array = [];
    let len = newArray.length;
    newArray.sort();
    let temp;
    for(let i = 0; i<len;i++){
       if(newArray[i] !== temp){
           array.push(newArray[i]);
           temp = newArray[i]
       }
    }
    return array;
}

console.log("Removing Duplicates using Sort method ....")
console.log(removeDupBySort(Array))


//  Using Onject  ----------------->  n

function removeDupByObject(newArray){
    let obj = {}

    for(let i of newArray){
        obj[i] = true;
    }
    let array = Object.keys(obj)
    return array

}

console.log("Removing Duplicates using Object ....")
console.log(removeDupByObject(Array))

