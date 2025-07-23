/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowelArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let i = 0;
    let j = s.length - 1;
    let strArr = s.split("");

    while (i < j) {
        if (!vowelArr.includes(strArr[i])) {
            i++;
            continue;
        }
        if (!vowelArr.includes(strArr[j])) {
            j--;
            continue;
        }
        if (vowelArr.includes(strArr[i]) && vowelArr.includes(strArr[j])) {
            let tmp = strArr[i];
            strArr[i] = strArr[j];
            strArr[j] = tmp;
            i++;
            j--;
        }

    }


    return strArr.join("");
};