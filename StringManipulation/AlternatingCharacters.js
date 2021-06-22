// You are given a string containing characters  and  only. 
// Your task is to change it into a string such that there are no matching adjacent characters. 
// To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// Example
//          s = AABAAB

// Remove an A at positions 0 and 3 to make s = ABAB in 2 deletions.



function alternatingCharacters(s) {
    // Write your code here
    s = s.split("");
    let deletions = 0;
    for(let i=0;i<s.length;i++){
        if(s[i+1] && (s[i] === s[i+1])){
            deletions++;
        }
    }
    return deletions
}
console.log(alternatingCharacters('AABAAB'))