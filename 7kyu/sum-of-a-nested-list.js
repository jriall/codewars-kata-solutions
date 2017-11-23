// https://www.codewars.com/kata/sum-of-a-nested-list/train/javascript

// Implement a function to calculate the sum of the numerical values in a nested list. For example :

// sumNested([1, [2, [3, [4]]]]) => 10

// SOLUTION

const sumNested = arr => {
  const flattedAndSum = (total, curr)=>Array.isArray(curr) ? curr.reduce(flattedAndSum, total) : total + curr;
  return arr.reduce(flattedAndSum, 0);
};