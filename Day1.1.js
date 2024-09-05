var merge = function(nums1, m, nums2, n) {
    let SortedArray = [];
    
    // Add only the first 'm' elements of nums1 to SortedArray
    for (let i = 0; i < m; i++) {
        SortedArray.push(nums1[i]);
    }

    // Add only the first 'n' elements of nums2 to SortedArray
    for (let j = 0; j < n; j++) {
        SortedArray.push(nums2[j]);
    }
    
    // Sort the merged array
    SortedArray.sort((a, b) => a - b);
    
    // Update nums1 with the sorted array
    for (let i = 0; i < SortedArray.length; i++) {
        nums1[i] = SortedArray[i];
    }
    
    console.log(nums1);
};

merge([0,0,1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
