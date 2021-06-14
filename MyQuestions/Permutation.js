

function Permutation(string) {
    var permut = [];

    if (string.length === 0) return []
    if (string.length === 1) return [string]
    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        var remainingChar = string.slice(0, i).concat(string.slice(i + 1));

        
        let remainingPermutation = Permutation(remainingChar)
        if (string.indexOf(char) != i)
        continue
        for (let j = 0; j < remainingPermutation.length; j++) {
            let permutedArray = [char] + remainingPermutation[j]
            permut.push(permutedArray)
        }
    }
    return permut
}
console.log(Permutation('121'))

