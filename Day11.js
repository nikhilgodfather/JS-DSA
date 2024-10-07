var minLength = function(s) {
    const Words = ['AB', 'CD'];
    let Str = s.split('');  // Convert string to array of characters
    
    // Repeat as long as any of the words exist in the string
    let found = true;
    while (found) {
        found = false; // Assume no match found, will check for matches
        for (let word of Words) {
            const Index = Str.join('').indexOf(word); // Join array to string and search for word
            if (Index !== -1) { // If word found
                Str.splice(Index, word.length); // Remove the word using splice
                found = true; // Continue loop since we made a change
                break; // Restart the loop to avoid index issues with multiple splices
            }
        }
    }

    return Str.length;  // Join the array back into a string and return the result
};

console.log(minLength("ABFCACDB"));
