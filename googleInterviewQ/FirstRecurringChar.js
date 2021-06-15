// given a string, find the first recurring charcter

function findChar(string){
    var obj = {}
    for(let i=0;i<string.length;i++){
        if(!Object.keys(obj).includes(string[i])){
            obj[string[i]] = 1
        }else{
            return string[i]
        }
    }
}
console.log(findChar('DCBADBD'))