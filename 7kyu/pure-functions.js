// https://www.codewars.com/kata/pure-functions/train/javascript

// A function is pure when:

// It always return the same value given the same arguments (it doesn't update or depend on out of the scope variables);
// Evaluation of the result does not cause side effect (mutations...) or output
// Task

// You are given a function that is impure, and your job is to purify it.

// This function must:

// return a new array where each value is itself plus 2 times the "modifier"
// Example:

// Array = 1, 2, 3
// Modifier = 5

// Should return = 11, 12, 13

// SOLUTION

const state = {
  modifier: 2,
};

function solution(arr, options) {
  return arr.map(a=>a+(2*options.modifier));
}