// [1,2].print()

// Above code should print 1,2


//

Array.prototype.print = () => {
   return this[0],this[1]
}

console.log([1,2].print()) 