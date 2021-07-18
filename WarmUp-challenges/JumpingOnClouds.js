function jumpingOnClouds(c) {

    let jumps = 0;
    
    for (let i = 0; i < c.length; i++) {
        if (c[i] === 0) {
            if (c[i + 2] === 0) {
                jumps++;
                i = i + 1;
                continue;
            }
            if (c[i + 1] === 0 && (c[i + 2] === 1 || !(c[i + 2]))) {
                jumps++;
                continue;
            }
        } else {
            continue;
        }
    }

    return jumps;
}

