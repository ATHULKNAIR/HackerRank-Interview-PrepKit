// const a = function(x){
//     this.x =x
// }

// const b = function(x,y){
//     this.y = y
// }

// const newB = new b('x','y');

// newB.getX();
// newB.getY();

//////////////////////////////////////////////////////

//  How will you get x and y .

const a = function (x) {
    this.x = x
}


const b = function (x, y) {
    this.y = y;
    this.x = new a(x).x    // a.call(this,x);  
    this.getY=()=> {
        return this.y
    }
   this.getX=()=> {
    return this.x
}
}


const newB = new b('x', 'y');

console.log(newB.getX());
console.log(newB.getY());


