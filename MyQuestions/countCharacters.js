function Countchar(char,string){
    var count = 0;
    var str = string.split('');
    for(let i =0 ;i<str.length;i++){
        if(str[i]===char){
            count++
        }
    }
    return count;
}

console.log(Countchar('s','strings'));