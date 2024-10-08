var findDuplicate = function(nums) {
    
    const Numbers = [...new Set(nums)]
    const DuplicateMap = new Map();
    for(let i =0 ; i<nums.length ; i++){
       if(DuplicateMap.has(nums[i])){
        return nums[i]
       }else{
        DuplicateMap.set(nums[i] , i)
       }
    }
};

console.log(findDuplicate([1,3,4,2,2]))