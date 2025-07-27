/**
 * 前缀和
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let frontArr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        frontArr[i] = frontArr[i - 1] + nums[i];
    }

    // 从第一项开始遍历是否相等
    for (let i = 0; i < nums.length; i++) {
        // 左侧和
        const leftSum = i === 0 ? 0 : frontArr[i - 1];
        // 右侧和 - 不包括自身
        const rightSum = frontArr[nums.length - 1] - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1;
};