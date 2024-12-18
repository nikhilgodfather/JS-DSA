var searchInsert = function(nums, target) {
 
     for(let num of nums){
        if(num >=target){
            return nums.indexOf(num)
        }
        }
        return nums.length()
};

console.log(searchInsert(nums = [1,3,5,6], target = 2))