var arrayRankTransform = function(arr) {
    // Create an array of unique values and sort it
    const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);
    
    // Create a mapping of values to their ranks
    const valueRankMap = {};
    uniqueSorted.forEach((value, index) => {
        valueRankMap[value] = index + 1; // Rank starts from 1
    });
    
    // Transform the original array into ranks
    return arr.map(value => valueRankMap[value]);
};

// Test the function
console.log(arrayRankTransform([40, 10, 20, 30]));
