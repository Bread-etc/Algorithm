/**
 * 滑动窗口
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0;
    let zeroCount = 0;
    let maxLength = 0;

    // 右指针遍历数组
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeroCount++;

        while (zeroCount > k) {
            if (nums[left] === 0) zeroCount--;
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};


/**
 * 前缀和 + 二分查找
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    // 计算前缀和数组（记录到每个位置为止有多少个0）从 1 开始
    const prefixSum = new Array(nums.length + 1).fill(0);
    for (let i = 1; i <= nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + (nums[i - 1] === 0 ? 1 : 0);
    }

    // 使用二分查找找到最大窗口
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        let left = i;
        let right = nums.length;
        while (left < right) {
            const mid = Math.floor((left + right + 1) / 2);
            const zeros = prefixSum[mid] - prefixSum[i];
            if (zeros <= k) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        maxLength = Math.max(maxLength, right - i);
    }

    return maxLength;
}