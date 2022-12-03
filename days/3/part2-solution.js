"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
*
*  Author:  Joe Cohen
*  Mood:    Bright
*  Problem: https://adventofcode.com/2022/day/3#part2
*  Status:  Not Solved
*
*******************************************************************************/
var nReadlines = require('n-readlines');
var inputData = new nReadlines("".concat(__dirname, "/input.txt"));
// const inputData = new nReadlines(`${__dirname}/test-input.txt`);
var line1, line2, line3, total = 0;
while (line1 = inputData.next(),
    line2 = inputData.next(),
    line3 = inputData.next())
    total += alphaToNumber(findDuplicateItem(line1.toString('ascii'), line2.toString('ascii'), line3.toString('ascii')));
console.log("Total: ".concat(total));
var used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log("Memory used: ".concat(Math.round(used * 100) / 100, " MB"));
// Helpers
function alphaToNumber(alpha) {
    if (!alpha)
        return 0;
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(alpha) + 1;
}
function findDuplicateItem(list1, list2, list3) {
    for (var _i = 0, list1_1 = list1; _i < list1_1.length; _i++) {
        var item = list1_1[_i];
        if (list2.includes(item) && list3.includes(item))
            return item;
    }
    return null;
}
