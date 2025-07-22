/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let maxValue = Math.max(...candies);

    return candies.map((item) => (item + extraCandies >= maxValue));
};