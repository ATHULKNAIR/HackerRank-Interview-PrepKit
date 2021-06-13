// find the output
 console.log(this)   // ---------> Window Object

 this.table = "window table"
console.log(this.table)



/////////////////  'this' inside global scope   /////////////////
 
  this.table = 'window table'
  console.log(this.table)

  this.garage = {
      table : 'garage table'
  }

  this.garage.table

  //here this is a public property , everyone can access this,
  //  it is accessible from outside


  ////////////////  'this' inside an object  ////////

  let AthulsRoom = {
      table : 'Athuls Table'
  };
  // if we wanna access athuls table.. we cannot do (this.AthulsRoom.table)
     //console.log(this.AthulsRoom.table)  // -----> TypeError : Cannot read property table of undefined
    console.log(AthulsRoom.table)  // ----> 'Athuls Table'  
// Since it is private, we cannot access it by this, it should be called using object name itslef


////////////////   'this' inside a method  /////////////
let AthulsRoom2 = {
    table : 'Athuls Table',
    cleanTable(soap){
        console.log(`cleaning ${this.table} using ${soap}` )
    }
}
AthulsRoom2.cleanTable('Lux')
// Similarly we can use the this in method in public object also
this.garage2 = {
    table : 'garage table',
    cleanTable(soap){
        console.log(`Cleaning ${this.table} using ${soap}`)
    }
}
this.garage2.cleanTable('Santoor')




////////////  'this' inside a function   ////////

this.table = 'window table'
const cleanTable = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`)
}
cleanTable('Hamam')    // table cannot be accessed
// we use call method for the rescue
cleanTable.call(this,'Hamam')

// similarly.. we dont need method to be inside object to access them

this.garage4 = {
    table : 'garage table'
}

let AthulsRoom3 = {
    table : 'Athuls Table'
}
// we can call the function and accees this keyword
cleanTable.call(this.garage4,'Lux')
cleanTable.call(AthulsRoom3,'Santoor')



///////////// 'this' inside an inner function  ///////
 
const cleanTable1 = function(soap){
    const innerFunction = function(Soap){
    console.log(`cleaning ${this.table} using ${Soap}`)
    }
    innerFunction(soap)
}
cleanTable1.call(this.garage4,'Lux')     // this.table will be undefined, regular function donot know what to do with this
/// there are 3 solutions 

// 1) making the innerfunction an arrow function
const cleanTable2 = function(soap){
    const innerFunction = (Soap)=>{
    console.log(`cleaning ${this.table} using ${Soap}`)
    }
    innerFunction(soap)
}
cleanTable2.call(this.garage4,'Lux')  // -------> arrow function take this from outer scope and use it 

// 2)  assigning the value of this to another variable
const cleanTable3 = function(soap){
    let that = this
    const innerFunction = function(Soap){
    console.log(`cleaning ${that.table} using ${Soap}`)
    }
    innerFunction(soap)
}
cleanTable3.call(this.garage4,'Lux')  

// 3) using call and bind functions
const cleanTable4 = function(soap){
    const innerFunction = function(Soap){
    console.log(`cleaning ${this.table} using ${Soap}`)
    }
    innerFunction.call(this,soap)

}
cleanTable4.call(this.garage4,'Lux')  



///////////////////// 'this' inside a constructor  /////////////
// constructor are nothing but a function
let createRoom = function(name){
    this.table = `${name}s table`
}
const cleanTable5 = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`)
}

const AthulsRoom4 = new createRoom('Athul');
const AthulyasRoom = new createRoom('Athulya')

cleanTable5.call(AthulsRoom4,'Lifebouy')
cleanTable5.call(AthulyasRoom,'Pears')

// instead of using function like this, since we have used a constructor, we can make function using prototype
createRoom.prototype.cleanTable6 = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`)
}

AthulsRoom4.cleanTable6('Lifebouy')
AthulyasRoom.cleanTable6('Pears')



/////////////////////// 'this' inside a class   ///////////////
class createRoom1{
    constructor(name){
        this.table = `${name}s table`
    }
    cleanTable(soap){
    console.log(`cleaning ${this.table} using ${soap}`)

    }
}

const ReenasRoom = new createRoom1('Reena')
const MuralisRoom = new createRoom1('Murali')

ReenasRoom.cleanTable('Dove')
MuralisRoom.cleanTable('Medimix')


