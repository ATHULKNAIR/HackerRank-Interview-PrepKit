const Animal = {
     first : 'Hi',
     last : 'Athul'
}

const propertyKey = Object.keys(Animal);
console.log("Keys to Array : ")
console.log(propertyKey)


const propertyValue = Object.values(Animal);
console.log("Values to Array : ")
console.log(propertyValue)

const propertyEntries = Object.entries(Animal)
console.log("Object to Array : ")
console.log(propertyEntries)


var object = {"0":5,"1":7,"2":4,"3":6,"4":7,"5":8,"6":12,"7":11,"8":2}  
var convert  = Object.keys(object).map(function(key)  
 {  
  return [Number(key), object[key]];  
});  
  
console.log(convert); 