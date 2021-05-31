function repeatedString(s, n) {
    // Write your code here
   
    let count = 0;
    for(let i = 0; i < s.length; i++)
        
        if(s[i] === 'a'){
           count++;
        }
         
    let totalCount = count * Math.floor(n / s.length);
    let remainder = n % s.length
    
    for(let i = 0; i < remainder; i++)
        if(s[i] === 'a'){
          totalCount++;
        }
    
    return totalCount;
 
}
