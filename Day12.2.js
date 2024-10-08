var firstMissingPositive = function(nums) {
    const n = nums.length;

    // Step 1: Place each number in its right place (1 to n)
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            const temp = nums[i];
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
    }

    // Step 2: Find the first missing positive
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // If all numbers are in place, return n + 1
    return n + 1;
};

// Example usage
console.log(firstMissingPositive([-1, -2])); // Output: 1
console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
