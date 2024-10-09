// var rotate = function(nums, k) {
//     if(k <=0){
//         return nums
//     }

//     const ArrayK = []
//     const SpliceElements = nums.splice(-k);
//     SpliceElements.forEach(element => {
//         ArrayK.push(element)
//     });
//     const result = ArrayK.concat(nums)
//     return result
// };

// console.log(rotate(nums = [1,2,3,4,5,6,7], k = 3))

// var rotate = function(nums, k) {
//     if(k <=0){
//         return nums
//     }
//     for(let i=0; i<k ; i++){
//         const lastElement = nums.pop();
//         nums.unshift(lastElement)
//     }
//     return nums
// };

// console.log(rotate(nums = [-1,-100,3,99], k = 2))


var rotate = function(nums, k) {
    if(k <=0){
        return nums
    }
    if(nums.length<k){
        for(let i=0 ; i<k ;i++){
            const lastElement = nums.pop()
            nums.unshift(lastElement)

        }
        return nums
    }
    const SpliceElements = nums.splice(-k);
    nums.unshift(...SpliceElements)
    return nums
};

console.log(rotate(nums = [-1,-100,3,99], k = 2))