function checkMagazine(magazine, note) {
    let magDict = {};
    let works = '';

    //Populate magDict with words from the magWordArr
    for (let i = 0; i < magazine.length; i++){
        let word = magazine[i];
        magDict[word] = magDict[word] ? magDict[word] + 1 : 1; 
    }

    //Loop through the note and compare with magazine object
    for (let i = 0; i < note.length; i++){
        //magDict has the word needed for the note
        if (!(note[i] in magDict)) {
            works = 'No';
            break;
        } else {
            //In the magDict
            if (magDict[note[i]] < 1) {
                works = 'No'
                break;
            }
            //Subtract one from the number of words in dict
            magDict[note[i]] = magDict[note[i]] - 1;
        }
    }
    if (works === '') { works = 'Yes' }
    console.log(works);
}
