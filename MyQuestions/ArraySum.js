let arr = [1, 2, 5, 7]

// add these elements

let sum1 = 0
for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i]
}
console.log(sum1)

let sum2 = arr.reduce((sum, item) => sum + item)
console.log(sum2)