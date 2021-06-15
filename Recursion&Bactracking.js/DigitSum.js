function superDigit(n, k) {
    // Write your code here
    n = n.split("").reduce((a, b) => +a + +b) * k + "";
    return (n.length > 1) ? superDigit(n, 1) : n.charAt(0);
}
console.log(superDigit(123,3))

console.log(+"5" === 5)