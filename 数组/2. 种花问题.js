/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let canPlant = 0;
    // 为了处理边界情况，可以在数组前后各加一个0
    flowerbed = [0, ...flowerbed, 0];

    for (let i = 1; i < flowerbed.length - 1; i++) {
        // 当前位置是0，且前后都是0，就可以种花
        if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            canPlant++;
        }
    }

    return canPlant >= n;
};

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let canPlant = 0;
    const { length } = flowerbed;

    for (let i = 0; i < length; i++) {
        // 当前位置是0，且前后都是0(或边界)，就可以种花
        if (flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1;
            canPlant++;
        }
    }

    if (canPlant >= n) {
        return true;
    }

    return canPlant >= n;
};