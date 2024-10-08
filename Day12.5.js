var intersection = function(nums1, nums2) {
    let common = []
    if(nums1.length===0 || nums2.length === 0){
        return []
    }

    for(let i = 0 ; i<nums1.length ; i++){
        if(nums2.includes(nums1[i]) && !common.includes(nums1[i])){
            common.push(nums1[i])
        }
    }
    return common
};

console.log(intersection( nums1 = [4,9,5], nums2 = [9,4,9,8,4]))