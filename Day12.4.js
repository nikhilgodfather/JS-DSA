// var findDisappearedNumbers = function(nums) {
//     const Sorted = nums.sort((a,b)=> a-b);
//     let missing = []
//     for(let i=1;i<=nums.length;i++){
      
//         if(!Sorted.includes(i)){
//             missing.push(i)
//           }

//     }
//     return missing  
// };



// console.log(findDisappearedNumbers([1,2]))

var findDisappearedNumbers = function(nums) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            const temp = nums[i];
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
    }
        let missing = []
        for(let i=1;i<=n;i++){
            if(!nums.includes(i)){
                missing.push(i)
            }
        }
        return missing  
};



console.log(findDisappearedNumbers([1,1]));