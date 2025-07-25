/**
 * 双指针
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const length = right - left;
        const water = Math.min(height[left], height[right]) * length;
        maxWater = Math.max(maxWater, water);
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }

    return maxWater;
};