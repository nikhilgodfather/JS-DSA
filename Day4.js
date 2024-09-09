var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    let res = [];
    
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Avoid duplicate for the first number

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Avoid duplicate for the second number

            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);

                    // Avoid duplicates for the third number
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Avoid duplicates for the fourth number
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return res;
};
