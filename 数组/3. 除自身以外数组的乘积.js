/**
 * 前缀积和后缀积
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const { length } = nums;
    const answer = new Array(length);

    // 计算左侧乘积
    answer[0] = 1;
    for (let i = 1; i < length; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    // 计算右侧乘积并与左侧乘积相乘
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] = answer[i] * rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
};