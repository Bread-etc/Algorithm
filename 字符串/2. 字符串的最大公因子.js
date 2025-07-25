/**
 * 辗转相除法
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    // 如果两个子串拼接后不相等,则没有公因子
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    // 辗转相除法
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    return str1.substring(0, gcd(str1.length, str2.length));
};