/**
 * 队列
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    const queue = senate.split("");
    let rCount = (senate.match(/R/g) || []).length;
    let dCount = senate.length - rCount;

    while (rCount > 0 && dCount > 0) {
        const head = queue.shift();

        if (head === "R") {
            // 要禁止下一个D议员
            const index = queue.indexOf("D");
            queue.splice(index, 1);
            dCount--;
        } else {
            const index = queue.indexOf("R");
            queue.splice(index, 1);
            rCount--;
        }

        queue.push(head);
    }

    return rCount > 0 ? "Radiant" : "Dire";
};