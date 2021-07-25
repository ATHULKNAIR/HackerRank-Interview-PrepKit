// const obj = { 
//     x:1,
//     getX(){
    
//         const inner = function(){
//             console.log(this.x)
//         }
//         inner();
//     }
// }

// obj.getX()

//  What will you get as the output

// Its undefined

// How to make it console 1

///////  SOLUTION 1  //////

const obj = { 
    x:1,
    getX(){
        const that = this
        const inner = function(){
            console.log(that.x)
        }
        inner();
    }
}

obj.getX()

/////////   SOLUTION 2  //////

const obj2 = { 
    x:1,
    getX(){
        
        const inner = () => {
            console.log(this.x)
        }
        inner();
    }
}

obj2.getX()


////////  SOLUTION 3  //////
const obj3 = { 
    x:1,
    getX(){
       
        const inner = function(){
            console.log(this.x)
        }
        inner.call(this);
    }
}

obj3.getX()