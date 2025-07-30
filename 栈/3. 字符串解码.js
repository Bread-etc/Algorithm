/**
 * 栈
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const stack = [];
    let currentStr = "";
    let currentNum = 0;

    for (const char of s) {
        if (!isNaN(char)) {
            currentNum = currentNum * 10 + Number(char);
        } else if (char === '[') {
            stack.push([currentStr, currentNum]);
            currentStr = "";
            currentNum = 0;
        } else if (char === "]") {
            const [prevStr, num] = stack.pop();
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            currentStr += char;
        }
    }

    return currentStr;
};