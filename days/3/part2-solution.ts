/*******************************************************************************
*
*  Author:  Joe Cohen
*  Mood:    Bright
*  Problem: https://adventofcode.com/2022/day/3#part2
*  Status:  Solved
*
*******************************************************************************/
const nReadlines = require('n-readlines');
const inputData = new nReadlines(`${__dirname}/input.txt`);
// const inputData = new nReadlines(`${__dirname}/test-input.txt`);

let line1, line2, line3, total = 0;

while (
  line1 = inputData.next(),
  line2 = inputData.next(),
  line3 = inputData.next()
)
  total += alphaToNumber(
    findDuplicateItem(
      line1.toString('ascii'), 
      line2.toString('ascii'), 
      line3.toString('ascii')
    )
  );

console.log(`Total: ${total}`);
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`Memory used: ${Math.round(used * 100) / 100} MB`);

// Helpers
function alphaToNumber(alpha: string | null): number {
  if (!alpha) return 0;

  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(alpha) + 1;
}

function findDuplicateItem(list1: string, list2: string, list3: string): string | null {
  for (const item of list1)
    if (list2.includes(item) && list3.includes(item)) return item;

  return null;
}

export {};
