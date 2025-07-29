/**
 * 栈
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const stack = [];

    for (const planet of asteroids) {
        let shouldPush = true;

        // 栈不为空,新行星向左运动,栈顶行星向右运动
        while (stack.length > 0 && planet < 0 && stack[stack.length - 1] > 0) {
            const top = stack.pop();
            const sum = planet + top;

            if (sum < 0) {
                // 新行星更大
                continue;
            } else if (sum > 0) {
                // 栈顶行星更大
                stack.push(top);
                shouldPush = false;
                break;
            } else {
                // 两个都消失
                shouldPush = false;
                break;
            }
        }

        if (shouldPush) {
            stack.push(planet);
        }
    }

    return stack;
};