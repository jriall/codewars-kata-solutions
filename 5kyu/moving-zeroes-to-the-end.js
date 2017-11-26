// https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// SOLUTION

var moveZeros = function (arr) {
  let zeroes = arr.filter(a=>a===0).length;
  return arr.filter(a=>a!==0).concat(...Array(zeroes).fill(0))
}