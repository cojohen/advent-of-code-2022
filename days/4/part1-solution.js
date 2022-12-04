"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
*
*  Author:  Joe Cohen
*  Mood:    Chilly
*  Problem: https://adventofcode.com/2022/day/4
*  Status:  Solved
*
*******************************************************************************/
var nReadlines = require('n-readlines');
var inputData = new nReadlines("".concat(__dirname, "/input.txt"));
// const inputData = new nReadlines(`${__dirname}/test-input.txt`);
var line, overlapsFound = 0;
while (line = inputData.next()) {
    overlapsFound += intervalsOverlap(line.toString()) ? 1 : 0;
}
console.log("Overlaps found: ".concat(overlapsFound));
var used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log("Memory used: ".concat(Math.round(used * 100) / 100, " MB"));
function intervalsOverlap(intervalString) {
    var intervals = intervalString.split(',').map(function (interval) { return interval.split('-').map(Number); });
    for (var i = 0; i < intervals.length; i++) {
        for (var j = i + 1; j < intervals.length; j++) {
            if (intervalsOverlapHelper(intervals[i], intervals[j])) {
                return true;
            }
        }
    }
    return false;
}
function intervalsOverlapHelper(interval1, interval2) {
    return (interval1[0] <= interval2[0] && interval2[1] <= interval1[1]) ||
        (interval2[0] <= interval1[0] && interval1[1] <= interval2[1]);
}
