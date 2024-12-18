var search = function(nums, target) {
    
    if(nums.includes(target)){
        return nums.indexOf(target)
    }
    return -1
};


console.log(search(nums = [1], target = 1))
