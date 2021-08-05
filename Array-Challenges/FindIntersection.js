function FindIntersection(strArr) { 

    var list = strArr.map(str=>str.split(",")) 
      
    var obj = {}
    var result = []
    for(let i = 0;i<list[0].length;i++){
       obj[list[0][i]] = true
    }
    for(let i = 0;i<list[1].length;i++){
        if(obj[list[1][i]]){
            result.push(list[1][i])
        }
    }
    if(result.length>0){
        strArr = result.toString()
    }else{
        strArr =false
    }
    return strArr; 
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
 
