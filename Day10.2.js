var largestNumber = function(nums) {
    // Convert numbers to strings for easy comparison
    nums = nums.map(num => num.toString());

    // Sort the numbers based on the combination of concatenation
    nums.sort((a, b) => a-b);
    console.log(nums)
    // Join the sorted array to form the largest number
    const result = nums.join('');

    // Edge case: when the result is all zeros, return just '0'
    return result[0] === '0' ? '0' : result;
};

console.log(largestNumber([10, 2]));  // Output: "210"
