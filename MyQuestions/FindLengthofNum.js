let x = 1234;

// Find the length of the num without converting 
// it into string


let length = 0;
while (x !== 0) {

    length++;
    x = parseInt(x / 10)
}

console.log(length)

