function stepPerms(n) {
    
   if(n ===1) return 1;
   if(n ===2) return 2;
   if(n ===3) return 4;
// if(n ===4) return 7;
// if(n ===5) return 13;
   
   return stepPerms(n-1)+stepPerms(n-2)+stepPerms(n-3)
}

// this solution doesnt pass all case due to timeout
// for passing......
// give two more lines of information to make the recursion faster..

