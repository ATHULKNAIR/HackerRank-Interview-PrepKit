// const obj = {
//     a:1,
//     b:2,
//     getA(){
//         console.log(this.a)
      
//     },
//     getB(){
//         console.log(this.a)
//     }
// };

// obj.getA().getB()

//  What will be the result of this question .. 
//  What can you do to get the answer without touching the last line

//  In line 6 ....add a line which says ... return this

const obj = {
    a:1,
    b:2,
    getA(){
        console.log(this.a)
        return this
      
    },
    getB(){
        console.log(this.a)
    }
};

obj.getA().getB()

