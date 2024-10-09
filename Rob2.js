// var rob = function(nums) {
//     const n = nums.length;
//     if(n===0) return 0;
//     if(n===1) return nums[0];
//     if(n===2){
//         return Math.max(nums[0], nums[1])
//     }
//     if(n===3){
//         const res = nums.sort((a,b)=>b-a)
//         return res[0]
//     }
//     let MaxMoney = []
//     let money = 0
//     for(let i=1 ; i<=n-1;i+=2){
        
//          money +=nums[i]
//     }
//     MaxMoney.push(money)
//     money= 0
//     for(let j=0;j<=n-2;j+=2){
        
//             money+=nums[j]
//     }
//     MaxMoney.push(money)
//     const result = MaxMoney.sort((a,b)=>b-a)
//     return result[0]
    
// };

// console.log(rob(nums = [1,2,3,1]))

var rob = function(nums) {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
     
    // Helper function to rob houses in a linear arrangement
    const robLinear = (houses) => {
        let prev1 = 0; // Max money robbed up to the previous house
        let prev2 = 0; // Max money robbed up to the house before the previous house
        
        for (const money of houses) {
            const temp = prev1; // Store the previous value
            prev1 = Math.max(prev1, prev2 + money); // Max of robbing or not robbing this house
            prev2 = temp; // Move prev1 to prev2
        }
        return prev1;
    };
    
    // Case 1: Exclude the first house and rob from houses[1] to houses[n-1]
    const case1 = robLinear(nums.slice(1));
    
    // Case 2: Exclude the last house and rob from houses[0] to houses[n-2]
    const case2 = robLinear(nums.slice(0, n - 1));
    
    // Return the maximum of the two cases
    return Math.max(case1, case2);
};

// Example usage:
console.log(rob([2, 3, 2])); // Output: 3
console.log(rob([1, 2, 3, 1])); // Output: 4
console.log(rob([1, 2, 3])); // Output: 3
