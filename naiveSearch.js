function naiveSearch(long, short) {
    let count = 0;

    // loop over the longer string
    for (let i = 0; i < long.length; i++) {
        // loop over the shorter string
        for (let j = 0; j < short.length; j++) {
            console.log(short[j], long[i+j]);
            // if the characters don't match, break out of the inner loop
            if (short[j] !== long[i+j]) { // 
                // console.log('BREAK!');
                break;
            }
            // if you complete the inner loop and find a match, increment the count of matches
            if (j === short.length - 1) {
                // console.log('FOUND ONE!');
                count++;
            }
        }
    }
    // return the count
    return count;
}

// console.log(naiveSearch('lorie loled', 'lol'));