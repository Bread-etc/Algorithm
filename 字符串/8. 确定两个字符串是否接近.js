/**
 * 哈希表
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;

    const map1 = getCharCount(word1);
    const map2 = getCharCount(word2);

    // 字符集必须完全相同
    const char1 = Array.from(map1.keys()).sort();
    const char2 = Array.from(map2.keys()).sort();
    if (char1.join(" ") !== char2.join(" ")) return false;

    // 字符出现次数的集合必须相同
    const counts1 = Array.from(map1.values()).sort((a, b) => a - b);
    const counts2 = Array.from(map2.values()).sort((a, b) => a - b);
    return counts1.join(" ") === counts2.join(" ");
};

function getCharCount(str) {
    const map = new Map();
    for (const char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
}