var minSwaps = function(s) {
    let balance = 0; // Tracks the balance of brackets
    let unmatchedClose = 0; // Counts unmatched closing brackets

    for (let char of s) {
        if (char === '[') {
            balance++; // Increment balance for an opening bracket
        } else {
            balance--; // Decrement balance for a closing bracket
        }

        // If balance is negative, we have more closing brackets than opening
        if (balance < 0) {
            unmatchedClose++; // We have an unmatched closing bracket
            balance = 0; // Reset balance
        }
    }

    // Each swap can fix 2 unmatched brackets
    return Math.ceil(unmatchedClose / 2);
};

// Test the function with the provided examples
console.log(minSwaps("][][")); // Output: 1
console.log(minSwaps("]]][[[")); // Output: 2
console.log(minSwaps("[]")); // Output: 0
