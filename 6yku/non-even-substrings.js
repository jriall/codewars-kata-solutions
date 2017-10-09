// https://www.codewars.com/kata/non-even-substrings/train/javascript

// Given a string of integers, return the number of odd-numbered substrings that can be formed.

// For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

// solve("1341") = 7. See test cases for more examples.

// SOLUTION

function solve(s) {
  var final = 0;
  for (var i = 0; i < s.length; i++) {
    for (var j = i + 1; j < s.length+1; j++) {
      if (Number(s.substring(j - 1, j)) % 2 !== 0) {
        final++;
      }
    }
  }
  return final;
}