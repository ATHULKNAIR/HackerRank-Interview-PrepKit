// function isPal(string){
//     isPal = false;
//     var str = string.split('').reverse().join('');
//     if(string === str){
//         isPal= true;
//     }
//     return isPal
// }
function checkPal(str){
    let start = 0;
    let end = str.length-1
    while(start<end){
       if(str[start] != str[end-start]){
         return false;
       }
       start++;
    }
    return true;
 }
console.log(checkPal('lesvel'))