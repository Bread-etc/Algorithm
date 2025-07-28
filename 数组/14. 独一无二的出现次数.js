/**
 * 哈希表
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const map = new Map();

    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const seenCount = new Set();
    for (const item of map.values()) {
        if (seenCount.has(item)) return false;
        seenCount.add(item);
    }

    return true;
};
