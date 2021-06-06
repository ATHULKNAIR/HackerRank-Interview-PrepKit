// Linear search, also called sequential or simple, is the most basic search algorithm. 
// Given a data structure, for example an array, we search for an item by looking
// at all the elements, until we find it.


const linearSearch = (list, item) => {
    for (const [i, element] of list.entries()) {
        if (element === item) {
            return i
        }
    }
}

console.log(linearSearch([1,2,3,4,5],5))