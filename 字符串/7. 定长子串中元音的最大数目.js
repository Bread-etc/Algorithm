/**
 * 滑动窗口
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    // 计算第一个窗口的元音数量
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) count++;
    }
    let maxCount = count;

    // 滑动窗口
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i - k])) count--;
        if (vowels.has(s[i])) count++;
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};