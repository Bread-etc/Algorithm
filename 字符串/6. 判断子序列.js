/**
 * 双指针
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length === 0) return true;
    if (s.length > t.length) return false;
    if (s === t) return true;

    let sPointer = 0;
    for (let tPointer = 0; tPointer < t.length; tPointer++) {
        if (t[tPointer] === s[sPointer]) {
            sPointer++;
        }
    }

    return sPointer === s.length;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    const m = s.length;
    const n = t.length;

    // dp[i][j] 表示 t中第j个位置之后字符a出现的下一个位置
    const dp = Array(n + 1).fill().map(() => Array(26).fill(n));

    // 从后向前填充dp数组
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < 26; j++) {
            // 当前字符的ASCII码值减'a'
            dp[i][j] = dp[i + 1][j];
        }
        dp[i][t.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }

    // 匹配过程
    let add = 0;  // 当前待匹配字符在t中的起始位置
    for (let i = 0; i < m; i++) {
        // 如果当前位置已经超过t的长度，说明无法匹配
        if (add === n) return false;

        // 获取s中当前字符在t中下一次出现的位置
        const nextPos = dp[add][s.charCodeAt(i) - 'a'.charCodeAt(0)];

        // 如果找不到下一个位置，返回false
        if (nextPos === n) return false;

        // 更新下一次搜索的起始位置
        add = nextPos + 1;
    }

    return true;
};