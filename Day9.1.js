var reportSpam = function (message, bannedWords) {
    const bannedSet = new Set(bannedWords); // Using Set for O(1) lookup
    const messageCount = new Map(); // To track occurrences of each message word

    // Count occurrences of each word in the message
    for (let word of message) {
        if (messageCount.has(word)) {
            messageCount.set(word, messageCount.get(word) + 1);
        } else {
            messageCount.set(word, 1);
        }
    }

    let isValid = 0; // Counter for banned words found

    // Check for banned words in the message counts
    for (let bannedWord of bannedSet) {
        if (messageCount.has(bannedWord)) {
            isValid += messageCount.get(bannedWord); // Increment by the count of the banned word
        }
    }

    return isValid >= 2; // Return true if 2 or more banned words are found
};

console.log(
    reportSpam(
        ["hello", "world", "leetcode"], // message
        ["world", "hello"] // bannedWords
    )
);
