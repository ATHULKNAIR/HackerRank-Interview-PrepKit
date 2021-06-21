
function makeAnagram(a, b) {
    a = a.split("") 
    b = b.split("")   
    let len1 = a.length;
    let len2 = b.length;
    let n = len1 >= len2 ? len1 : len2;
    for(let i =0;i<n;i++){
    
           if(a[i] && b.includes(a[i])){
            b.splice(b.indexOf(a[i]),1);
            a.splice[i,1]
            len1--;
            len2--;
        }
    }
    return len1+len2;
}
console.log(makeAnagram('showman','womanywo'))

