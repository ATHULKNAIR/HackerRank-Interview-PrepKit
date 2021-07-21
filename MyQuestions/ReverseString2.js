var x = 'Athul';
// x =x.split('')
var n = x.length
x = [...x]
for(let i=0;i<n;i++){
   if(i<(n-1-i)){
      var temp = x[n-1-i];
      x[n-1-i] = x[i];
      x[i] = temp;
   
   }
}
// x =x.join('')
 
console.log(x)