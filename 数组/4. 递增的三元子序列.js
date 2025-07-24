/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            // 找到比first和second更大的数
            return true;
        }
    }

    return false;
};

// 针对连续的子数组
let length = 0;
let startItem = nums[0];
for (let i = 1; i < nums.length; i++) {
    if (nums[i] > startItem && (length === 0 || length === 1)) {
        length++;
        if (length === 2) return true;
    } else {
        length = 0;
    }
    startItem = nums[i];
}

return false;