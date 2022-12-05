/*******************************************************************************
*
*  Author:  Joe Cohen
*  Problem: https://adventofcode.com/2022/day/5#part2
*  Status:  Solved
*
*******************************************************************************/
const nReadlines = require('n-readlines');
const inputData = new nReadlines(`${__dirname}/input.txt`);
// const inputData = new nReadlines(`${__dirname}/test-input.txt`);
// const stacks = [ ['N', 'Z'], ['M', 'C', 'D'], ['P'] ];

const stacks = [
  ['F', 'C', 'P', 'G', 'Q', 'R'],
  ['W', 'T', 'C', 'P'],
  ['B', 'H', 'P', 'M', 'C'],
  ['L', 'T', 'Q', 'S', 'M', 'P', 'R'],
  ['P', 'H', 'J', 'Z', 'V', 'G', 'N'],
  ['D', 'P', 'J'],
  ['L', 'G', 'P', 'Z', 'F', 'J', 'T', 'R'],
  ['N', 'L', 'H', 'C', 'F', 'P', 'T', 'J'],
  ['G', 'V', 'Z', 'Q', 'H', 'T', 'C', 'W'],
];

let line;

while (line = inputData.next()) {
  const move = ~~line.toString().match(/(move )(\d+)/)[2];
  const from = ~~line.toString().match(/(from )(\d+)/)[2];
  const to = ~~line.toString().match(/(to )(\d+)/)[2];
  moveCrate(move, from, to);
}

stacks.forEach(stack => console.log(stack.slice(-1)[0]));
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`Memory used: ${Math.round(used * 100) / 100} MB`);

/** 
 *  Helpers
 */
function moveCrate(move: number, from: number, to: number) {
  let fromStack = stacks[from - 1];
  let toStack = stacks[to - 1];
  let substack = fromStack.slice(-move);
  stacks[from - 1] = fromStack.slice(0, -move);
  stacks[to - 1] = toStack.concat(substack);
}

export {}
