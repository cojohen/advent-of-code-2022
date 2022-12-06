/*******************************************************************************
*
*  Author:  Joe Cohen
*  Problem: https://adventofcode.com/2022/day/6
*  Status:  Not Solved
*
*******************************************************************************/
const nReadlines = require('n-readlines');
const inputData = new nReadlines(`${__dirname}/input.txt`);
// const inputData = new nReadlines(`${__dirname}/test-input.txt`);
let line = inputData.next(); // read one line
console.log(line.length - 4);
for (let i = 0; i < line.length - 4; i++) {
    if (stringIsMarker(line.slice(i, i + 4))) {
        console.log(`Marker after char:  ${i + 4}`);
        break;
    }
}
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`Memory used: ${Math.round(used * 100) / 100} MB`);
/**
 *  Helpers
 */
function stringIsMarker(str) {
    return str.length == [...new Set(str)].length;
}
// export {}
