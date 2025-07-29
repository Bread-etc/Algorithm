/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    const pairsMap = new Map();
    const n = grid.length;
    let result = 0;

    // 行遍历
    for (const item of grid) {
        const key = item.join(",");
        pairsMap.set(key, (pairsMap.get(key) || 0) + 1);
    }

    // 列遍历
    for (let col = 0; col < n; col++) {
        const item = [];
        for (let row = 0; row < n; row++) {
            item.push(grid[row][col]);
        }
        const key = item.join(",");
        const count = pairsMap.get(key) || 0;
        result += count;
    }

    return result;
};