// https://www.codewars.com/kata/5497a3c181dd7291ce000700

// Given a "square" array of subarrays, find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...

// Example 1:

// var exampleArray = [[1, 0, 0, 0],
//                    [0, 1, 0, 0],
//                    [0, 0, 1, 0],
//                    [0, 0, 0, 1]]

// diagonalSum(exampleArray) // => 4
// Example 2:

// var exampleArray = [[1, 0, 0, 0, 0],
//                    [0, 1, 0, 0, 0],
//                    [0, 0, 1, 0, 0],
//                    [0, 0, 0, 1, 0],
//                    [0, 0, 0, 0, 1]]

// diagonalSum(exampleArray) // => 5

// SOLUTION

function diagonalSum(matrix){
  var count = 0;
  for (var i=0; i<matrix.length; i++) {
    count+=matrix[i][i];
  }
  return count;
}
