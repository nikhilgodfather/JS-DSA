var findSubstring = function(s, words) {
    if (words.length === 0 || s.length === 0) return [];

    const wordLength = words[0].length;
    const totalWordsLength = wordLength * words.length;
    const wordMap = {};

    // Build a frequency map of the words
    for (const word of words) {
        wordMap[word] = (wordMap[word] || 0) + 1;
    }

    const resultIndices = [];

    // Loop through the string with a sliding window of size totalWordsLength
    for (let i = 0; i <= s.length - totalWordsLength; i++) {
        const seenWords = {};
        let j = 0;

        // Try to match words in the current window
        while (j < words.length) {
            const wordStart = i + j * wordLength;
            const word = s.substring(wordStart, wordStart + wordLength);

            if (wordMap[word]) {
                seenWords[word] = (seenWords[word] || 0) + 1;

                // If we see a word more times than it appears in words, break
                if (seenWords[word] > wordMap[word]) {
                    break;
                }
            } else {
                break; // Break if word is not in the wordMap
            }

            j++;
        }

        // If all words matched, add the starting index
        if (j === words.length) {
            resultIndices.push(i);
        }
    }

    return resultIndices;
};

// Example 1:
console.log(findSubstring("barfoothefoobarman", ["foo","bar"])); // Output: [0, 9]

// Example 2:
console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"])); // Output: []

// Example 3:
console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"])); // Output: [6, 9, 12]
