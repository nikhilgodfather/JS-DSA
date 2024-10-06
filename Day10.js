var areSentencesSimilar = function(sentence1, sentence2) {
    // Split sentences into arrays of words
    const words1 = sentence1.split(' ');
    const words2 = sentence2.split(' ');

    let left = 0;
    let right = 0;

    // Find the common prefix
    while (left < words1.length && left < words2.length && words1[left] === words2[left]) {
        left++;
    }

    // Find the common suffix
    while (right < (words1.length - left) && right < (words2.length - left) && words1[words1.length - 1 - right] === words2[words2.length - 1 - right]) {
        right++;
    }

    // Calculate lengths of remaining parts
    const remainingWords1 = words1.length - left - right;
    const remainingWords2 = words2.length - left - right;
    console.log(remainingWords2)
    // Check if we can insert the remaining part of one sentence into the other
    return remainingWords1 === 0 || remainingWords2 === 0;
};

// Test cases
console.log(areSentencesSimilar("My name is Haley", "My Haley")); // Output: true
