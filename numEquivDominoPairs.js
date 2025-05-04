var numEquivDominoPairs = function(dominoes) {
    const map = new Array(100).fill(0);
    let count = 0;

    for (let [a, b] of dominoes) {
        const key = a < b ? a * 10 + b : b * 10 + a;
        count += map[key];
        map[key]++;
    }

    return count;
};

// Example usage:
const dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]];
console.log(numEquivDominoPairs(dominoes)); // Output: 3
