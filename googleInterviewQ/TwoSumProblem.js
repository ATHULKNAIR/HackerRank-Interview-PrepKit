// For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7,
// your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.


function twoSum(arr, S) {
    // var sums = []
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         if((arr[i]+arr[j])===S){
    //             sums.push([arr[i],arr[j]])
    //         }
    //     }
    // }
    // return sums;
    var sums = []
    var obj = {}
    for (let i = 0; i < arr.length; i++) {

        var sumMinusS = S - arr[i]
        if (obj[sumMinusS]!==undefined) {
            sums.push([arr[i], sumMinusS])
        }
        obj[arr[i]] = true
       
    }
    return sums
}

console.log(twoSum([3, 5, 2, -4, 8, 11], 7))