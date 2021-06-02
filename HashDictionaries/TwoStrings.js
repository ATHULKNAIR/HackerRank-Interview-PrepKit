function twoStrings(s1, s2) {
    
    let result = "NO";
    const s1len = s1.length;
    const s2len = s2.length;

         result = (s1.split('')
                  .filter((el, key) => s2.indexOf(el) > -1)
                  .length > 0) ? "YES" : "NO";
    
    return result;
}