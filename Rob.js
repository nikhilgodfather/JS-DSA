
var rob = function(nums) {
    const n = nums.length;

    // Handle base cases
    if (n === 0) return 0; // No 
    if (n === 1) return nums[0]; // Only one 
    if (n === 2) return Math.max(nums[0], nums[1]); // Two 

    let dp = new Array(n);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]); 

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
        console.log(dp[i])
    }
    return dp[n - 1];
};

// Example Test Cases
console.log(rob([1, 3, 1, 3, 100]));
