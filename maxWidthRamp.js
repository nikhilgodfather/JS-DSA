var maxWidthRamp = function(nums) {
    let stack = [];
    let maxWidth = 0;

    // Build a decreasing stack of indices
    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
            stack.push(i);
        }
    }

    // Traverse the array from the right
    for (let j = nums.length - 1; j >= 0; j--) {
        // Find the widest ramp by popping from the stack
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[j]) {
            let i = stack.pop();
            maxWidth = Math.max(maxWidth, j - i);
        }
    }

    return maxWidth;
};
