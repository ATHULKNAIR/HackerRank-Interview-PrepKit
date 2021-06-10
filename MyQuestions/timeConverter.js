let time = '11:59PM'

// convert this into 24-hour format

let len = time.length
time = time.split('')
let period = time.splice(len - 2, 2).join('')
time = time.join('').split(":")

if (period === 'AM') {

    // When time is 12:00 AM
    if (parseInt(time[0]) === parseInt(12)) { 
        time[0] = "00"
        time = time.join(":")
    }
    // When time is between 1 to 11 AM
    else{
    time = time.join(':')
    }
    
    console.log(time)

} 
else {

    if (parseInt(time[0]) === parseInt(12)) { 
        time = time.join(":")
    }

    else {
        let hour = parseInt(time[0]) + parseInt(+12)
        time[0] = hour
        time = time.join(":")
    } 

    console.log(time)
}