"use strict";
function findMaximum(num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}
const a = 10;
const b = 25;
const c = 15;
console.log(`The maximum of ${a},${b},${c} is:${findMaximum(a, b, c)}`);
