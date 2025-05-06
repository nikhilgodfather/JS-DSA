var buildArray = function(nums) {
    let ans  = [];

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }
    return ans;
};


console.log(buildArray(nums = [0,2,1,5,3,4]))