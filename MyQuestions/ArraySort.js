// const a = [1,2,5,7,9]
// const b = [2,5,7,12,100];

//  create a array c which will merge and sort both the arrays



const a = [1,2,5,7,9]
const b = [2,5,7,12,100,101];


const c = []
let i = 0;
while(i<=b.length){
    if(i<a.length){
        if(a[i] === b[i-1]){
            c.push(b[i-1])
        }
         if(a[i]<b[i]){
            c.push(a[i]);
            i++
        }   
    }else{
        c.push(b[i])
        i++
    }
    
}

console.log(c)