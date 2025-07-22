/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let result = "";
    let length = word1.length > word2.length ? word2.length : word1.length;
    for (let i = 0; i < length; i++) {
        result += word1[i];
        result += word2[i];
    }
    if (word1.length === length) {
        result += word2.slice(length, word2.length + 1);
    } else {
        result += word1.slice(length, word1.length + 1);
    }

    return result;
};