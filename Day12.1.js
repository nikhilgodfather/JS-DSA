var missingNumber = function(nums) {
    
    const SortNumbers = nums.sort((a,b)=> a-b)
    let count = 0;
    for(let i=SortNumbers[0]; i<=nums.length ; i++){
        count +=i
    }
    const missingNumber = SortNumbers.reduce((sum , item)=>sum+item, 0)
    return count-missingNumber
   
};

console.log(missingNumber([0,1,3]))