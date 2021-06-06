//    Binary Search is searching technique which works on Divide and Conquer approach. 
// It used to search any element in a sorted array.

//     As compared to linear, binary search is much faster with Time Complexity of O(logN)
// whereas linear search algorithm works in O(N) time complexity.


// Recursive Approach :

// BASE CONDITION: If starting index is greater than ending index return false.
// Compute the middle index.
// Compare the middle element with number x. If equal return true.
// If greater, call the same function with ending index = middle-1 and repeat step 1.
// If smaller, call the same function with starting index = middle+1 and repeat step 1.



let recursiveBSearch = (array, item, start, end) => {
    if (start > end) {
        return false
    }
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === item) {
        return true
    }
    if (array[mid] > item) {
        return recursiveBSearch(array, item, start, mid - 1);
    } else {
        return recursiveBSearch(array, item, mid + 1, end)
    }
}

console.log(recursiveBSearch([1, 2, 3, 4, 5], 6, 0, 5))


// Iterative Approach : In this iterative approach instead of recursion, 
// we will use a while loop and the loop will run until it hits the base condition 
// i.e start becomes greater than end.

let iterativeBSearch = (array, item) => {
    let start = 0, end = array.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === item) {
            return true
        }
        if (array[mid] < item) {
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }
    return false;
}
console.log(iterativeBSearch([1, 2, 3, 4, 5, 6], 6))