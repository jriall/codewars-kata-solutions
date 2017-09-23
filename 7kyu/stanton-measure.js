//https://www.codewars.com/kata/stanton-measure/javascript

// The Stanton measure of an array is computed as follows: count the number of 1s in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

// Write a function which takes an integer array and returns its Stanton measure.

// Example

// The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

//SOLUTION

function stantonMeasure(arr) {
  return arr.filter(a=>a===arr.filter(a=>a===1).length).length;
}

//alternatively, the below is probably a bit more readable...
//   let n = arr.filter(a=>a===1).length;
function stantonMeasure(arr) {
  let n = arr.filter(a=>a===1).length;
  return arr.filter(a=>a===n).length;
}