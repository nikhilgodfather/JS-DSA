var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0; // Corrected variable name here

    while (left < right) {
        let currentArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea); // Corrected variable name here

        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Should output 49


// class Solution:
//     def maxArea(self, height: List[int]) -> int:
//         left = 0
//         right = len(height) - 1
//         maxArea = 0

//         while left < right:
//             currentArea = min(height[left], height[right]) * (right - left)
//             maxArea = max(maxArea, currentArea)

//             if height[left] < height[right]:
//                 left += 1
//             else:
//                 right -= 1

//         return maxArea