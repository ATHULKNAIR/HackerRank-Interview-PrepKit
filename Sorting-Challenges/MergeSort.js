function countInversions(arr) {
    // Write your code here
    let count = 0;
    mergesort(arr)

    function mergesort(array) {
        if (array.length == 1) return array;
        let mid = Math.floor(array.length / 2);
        const a1 = mergesort(array.slice(0, mid));
        const a2 = mergesort(array.slice(mid));
        return merge(a1, a2);
    }

    function merge(a1, a2) {
        let ptrA = 0;
        let ptrB = 0;
        const NewArr = [];
        while ((ptrA < a1.length) && (ptrB < a2.length)) {
            if (a1[ptrA] <= a2[ptrB]) {
                NewArr.push(a1[ptrA]);
                ptrA++
            } else {
                NewArr.push(a2[ptrB]);
                ptrB++
                count = count + (a1.length - ptrA)
            }
        }
        for (let i = ptrA; i < a1.length; i++) {
            NewArr.push(a1[i])
        }
        for (let i = ptrB; i < a2.length; i++) {
            NewArr.push(a2[i])
        }
        return NewArr
    }

    return count;
}

console.log(countInversions([2, 1, 3, 1, 2]))