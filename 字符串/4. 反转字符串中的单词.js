/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let stack = [];
    let tmpString = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] && s[i] !== " ") {
            tmpString += s[i];
            if (s[i + 1] === " " || i === s.length - 1) {
                stack.push(tmpString);
                tmpString = "";
            }
        }
    }

    return stack.reverse().join(" ");
};

/**
 * 双指针解法
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // 1. 先去除多余空格，将字符串转为数组便于处理
    const arr = s.trim().split('');
    removeExtraSpaces(arr);

    // 2. 翻转整个字符串
    reverse(arr, 0, arr.length - 1);

    // 3. 翻转每个单词
    let start = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === ' ' || i === arr.length) {
            // 遇到空格或到达末尾，翻转前面的单词
            reverse(arr, start, i - 1);
            start = i + 1;
        }
    }

    return arr.join('');
};

// 删除多余空格
function removeExtraSpaces(arr) {
    let slow = 0;
    let fast = 0;

    // 跳过开头的空格
    while (fast < arr.length && arr[fast] === ' ') fast++;

    // 处理中间的空格
    for (; fast < arr.length; fast++) {
        // 如果当前不是空格，或者前一个不是空格，就保留
        if (arr[fast] !== ' ' || arr[slow - 1] !== ' ') {
            arr[slow++] = arr[fast];
        }
    }

    // 如果末尾有空格，去掉
    if (arr[slow - 1] === ' ') slow--;

    arr.length = slow;
}

// 翻转指定区间的字符
function reverse(arr, left, right) {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}