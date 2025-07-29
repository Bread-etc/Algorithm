/**
 * 栈
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    const stack = [];
    for (const char of s) {
        char === "*" ? stack.pop() : stack.push(char);
    }
    return stack.join("");
};