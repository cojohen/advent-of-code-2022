/*******************************************************************************
*
*  Author:  Joe Cohen
*  Mood:    Bright
*  Problem: https://adventofcode.com/2022/day/3
*  Status:  Solved
*
*******************************************************************************/
const nReadlines = require('n-readlines');
const inputData = new nReadlines(`${__dirname}/input.txt`);
// const inputData = new nReadlines(`${__dirname}/test-input.txt`);

let line, total = 0;

while (line = inputData.next())
  total += alphaToNumber(findDuplicateItem(line.toString('ascii')));

console.log(`Total: ${total}`);
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`Memory used: ${Math.round(used * 100) / 100} MB`);

// Helpers
function alphaToNumber(alpha: string | null): number {
  if (!alpha) return 0;

  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(alpha) + 1;
}

function findDuplicateItem(items: string): string | null {
  const leftHalf = items.substring(0, items.length / 2);
  const rightHalf = items.substring(items.length / 2);

  for (const item of leftHalf)
    if (rightHalf.includes(item)) return item;

  return null;
}

export {};
