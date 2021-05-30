// There is a large pile of socks that must be paired by color. 
// Given an array of integers representing the color of each sock, 
// determine how many pairs of socks with matching colors there are.

// Example

// n = 7

// ar = [1,2,1,2,1,3,2]


// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is  2.



function sockMerchant(n, ar) {

    let sorted = ar.sort();
    let pairs = 0;

    for (let i = 0; i < n - 1; i++) {
        
        if (sorted[i] === sorted[i + 1]) {
            pairs++;
            i++;
        }
    }
   
    return pairs;
}