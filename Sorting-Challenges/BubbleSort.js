function countSwaps(a) {
    var swaps = 0;
    for(let i = 0; i<a.length;i++){
        for(let j = 0;j<a.length-1;j++){
            if(a[j]>a[j+1]){
                var temp = a[j+1];
                a[j+1] = a[j];
                a[j] = temp;
                swaps++
            }
        }
    }
    
     console.log('Array is sorted in ' + swaps + ' swaps.')
     console.log('First Element: ' + a[0])
     console.log('Last Element: ' + a[a.length - 1])
 }
