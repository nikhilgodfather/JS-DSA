var minAddToMakeValid = function(s) {
    let open = 0; // Count of unmatched open parentheses
    let close = 0; // Count of unmatched close parentheses

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++; // We have an open parenthesis
        } else if (s[i] === ')') {
            if (open > 0) {
                open--; // Match an open parenthesis
            } else {
                close++; // We have an unmatched close parenthesis
            }
        }
    }

    // The total result is the unmatched open + unmatched close parentheses
    return open + close;
}

console.log(minAddToMakeValid("((("));    // Output: 3
console.log(minAddToMakeValid("()))(("));  // Output: 4
