/*       
        const obj = {
            a: {
                b: {
                    c:1
                }
            }
        };

        const cloneObj =           // You should clone the obj

        cloneObj.a.b.c = 2;        // change value of c to 2

        console.log(obj.a.b.c); ==  1    should not change the original value in obj

*/

//////////////////////////////////

const obj = {
    a: {
        b: {
            c:1
        }
    }
};
console.log(obj.a.b.c)

const cloneObj = JSON.parse(JSON.stringify(obj))
cloneObj.a.b.c = 2
console.log(cloneObj)
console.log(obj.a.b.c)
