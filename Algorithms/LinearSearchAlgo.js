// Linear search, also called sequential or simple, is the most basic search algorithm. 
// Given a data structure, for example an array, we search for an item by looking
// at all the elements, until we find it.


const linearSearch = (array, item) => {
    for (const [i, element] of array.entries()) {
        if (element === item) {
            return i
        }
    }
}

console.log(linearSearch([1,2,3,4,5],5))

//  To calculate the Big O value we always look at the worst-case scenario.

//  So the algorithm complexity is O(n).