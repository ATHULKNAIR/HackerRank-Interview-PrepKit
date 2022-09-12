function countingValleys(steps, path) {
    // Write your code here

    let paths = path.split('');
    let valleyCount = 0;
    let seaLevel = 0;
    let valley = false;

    paths.forEach(path => {
        path === 'U' ? seaLevel++ : seaLevel-- ;

        if (seaLevel < 0 && !valley) {
            valleyCount++;
            valley = true;
        } else if (seaLevel >= 0 && valley) 
            valley = false
        
    })

    return valleyCount;
}
