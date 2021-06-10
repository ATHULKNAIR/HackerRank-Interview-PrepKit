let x = "i love Javascript"   

//  print "tpircsavaJ evol i"
 
//  1)

    let y = ""

    for(let i = x.length-1;i>=0;i--){
        y+=x[i]
    }

    console.log(y)

//  2)

    let z = x.split('').reverse().join('')
    console.log(z)

/////////////////////////////////////////////

// print "Javascript love I"

let rev = x.split(" ").reverse().join(" ")
console.log(rev)



/////////////////////////////////////////////


//  print "i evol tpircsavaJ"


let reverseStr = x.split(' ')
let b = ""
let c = ""
for(let i = 0; i <=reverseStr.length-1;i++){

    for(let j = reverseStr[i].length ;j>=0;j--){
     c =   reverseStr[i].split('').reverse().join('')
   
    }
  b =b+c+" "
 
}
console.log(b)