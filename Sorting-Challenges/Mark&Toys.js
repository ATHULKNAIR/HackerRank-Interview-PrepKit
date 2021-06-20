function maximumToys(prices, k) {
   
    prices = prices.sort((a,b)=>a-b);
    let sum = 0;
    let count = 0;
    // let array = [];
    for(let i=0;i<prices.length;i++){
        if(sum+prices[i]<=k){
            // array.push(prices[i]);
            sum += prices[i]
            count++
        }else{
            return count
        }
    }

}

console.log(maximumToys([1,4,3,2],7))
