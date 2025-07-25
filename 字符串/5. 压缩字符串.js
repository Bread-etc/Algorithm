/**
 * 双指针
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let writeIndex = 0;
    let count = 1;

    for (let readIndex = 1; readIndex <= chars.length; readIndex++) {
        if (readIndex === chars.length || chars[readIndex] !== chars[readIndex - 1]) {
            chars[writeIndex++] = chars[readIndex - 1];

            if (count > 1) {
                const countStr = count.toString();
                for (let digit of countStr) {
                    chars[writeIndex++] = digit;
                }
            }

            count = 1;
        } else {
            count++;
        }
    }

    return writeIndex;
};