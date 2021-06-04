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