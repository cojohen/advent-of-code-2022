/*******************************************************************************
*
*  Author:  Joe Cohen
*  Mood:    Chilly
*  Problem: https://adventofcode.com/2022/day/4
*  Status:  Solved
*
*******************************************************************************/
const nReadlines = require('n-readlines');
const inputData = new nReadlines(`${__dirname}/input.txt`);
// const inputData = new nReadlines(`${__dirname}/test-input.txt`);
let line, overlapsFound = 0;

while (line = inputData.next())
  overlapsFound += intervalsOverlap(line.toString()) ? 1 : 0;

console.log(`Overlaps found: ${overlapsFound}`);
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`Memory used: ${Math.round(used * 100) / 100} MB`);

export {};

function intervalsOverlap(intervalString: string): boolean {
  const intervals = intervalString.split(',').map(interval => interval.split('-').map(Number));

  for (let i = 0; i < intervals.length; i++)
    for (let j = i + 1; j < intervals.length; j++)
      if (intervalsOverlapHelper(intervals[i], intervals[j]))
        return true;
  return false;
}

function intervalsOverlapHelper(interval1: number[], interval2: number[]): boolean {
  return (interval1[0] <= interval2[0] && interval2[1] <= interval1[1])
    || (interval2[0] <= interval1[0] && interval1[1] <= interval2[1]);
}