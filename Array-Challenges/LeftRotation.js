function rotLeft(a,d){
  for(let i =d;i>0;i--){
     let b = a.shift();
     a.push(b)
  }
    return a 
}

console.log(rotLeft([1,2,3,4],3))