var removeElement = function(nums, val) {
    let i = 0; // Pointer for iteration
    let k = 0; // Pointer for placing the non-val elements
    
    // Loop through the array
    while (i < nums.length) {
        // If the current element is not equal to val
        if (nums[i] !== val) {
            // Assign it to the kth position
            nums[k] = nums[i];
            k++; // Increment the k pointer
        }
        i++; // Increment the i pointer
    }
    
    return k; // Return the number of elements that are not equal to val
};

removeElement([3,2,2,3] , 3)