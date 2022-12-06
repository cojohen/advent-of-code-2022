/*******************************************************************************
*
*  Author:  Joe Cohen
*  Problem: https://adventofcode.com/2022/day/6#part2
*  Status:  Solved
*
*******************************************************************************/
const nReadlines = require('n-readlines');
const inputData = new nReadlines(`${__dirname}/input.txt`);
// const inputData = new nReadlines(`${__dirname}/test-input.txt`);

let line = inputData.next();  // read one line

for (let i = 0; i < line.length - 14; i++) {
  if ( stringIsMarker(line.slice(i, i + 14))) {
    console.log(`Marker after char:  ${i + 14}`);
    break;
  }
}

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`Memory used: ${Math.round(used * 100) / 100} MB`);

/** 
 *  Helpers
 */
function stringIsMarker(str: string) {
  return str.length == [...new Set(str)].length;
}

//export {}