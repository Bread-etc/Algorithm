/**
 * 前缀和
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let newGain = [0, ...gain];

    for (let i = 1; i < newGain.length; i++) {
        newGain[i] = newGain[i - 1] + newGain[i];
    }

    return Math.max(...newGain);
};