"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
*
*  Author:  Joe Cohen
*  Mood:    Bright
*  Problem: https://adventofcode.com/2022/day/3
*  Status:  Not Solved
*
*******************************************************************************/
var nReadlines = require('n-readlines');
var inputData = new nReadlines("".concat(__dirname, "/input.txt"));
// const inputData = new nReadlines(`${__dirname}/test-input.txt`);
var line, total = 0;
while (line = inputData.next())
    total += alphaToNumber(findDuplicateItem(line.toString('ascii')));
console.log("Total: ".concat(total));
var used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log("Memory used: ".concat(Math.round(used * 100) / 100, " MB"));
// Helpers
function alphaToNumber(alpha) {
    if (!alpha)
        return 0;
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(alpha) + 1;
}
function findDuplicateItem(items) {
    var leftHalf = items.substring(0, items.length / 2);
    var rightHalf = items.substring(items.length / 2);
    for (var _i = 0, leftHalf_1 = leftHalf; _i < leftHalf_1.length; _i++) {
        var item = leftHalf_1[_i];
        if (rightHalf.includes(item))
            return item;
    }
    return null;
}
