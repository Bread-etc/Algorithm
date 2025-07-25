/**
 * 双指针
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let action = 0;

    // 先进行升序排序
    nums.sort((a, b) => (a - b));

    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === k) {
            action++;
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }

    return action;
};

/**
 * 哈希表(散列表)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    const map = new Map();
    let count = 0;

    for (let num of nums) {
        if (map.has(k - num) && map.get(k - num) > 0) {
            count++;
            map.set(k - num, map.get(k - num) - 1);
        } else {
            map.set(num, (map.get(num) || 0) + 1);
        }
    }

    return count;
};