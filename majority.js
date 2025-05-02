var majorityElement = function(nums) {
    const count = new Map();
    const majorityCount = Math.floor(nums.length / 2);
    for (let num of nums) {
        if (count.has(num)) {
            count.set(num, count.get(num) + 1);
        } else {
            count.set(num, 1);

        }
        if (count.get(num) > majorityCount) {
            return num;
        }
    }
    return undefined;
};
console.log(majorityElement([1,2,3,3,3]));
console.log(majorityElement([3,2,2,2,3]));

