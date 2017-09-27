// https://www.codewars.com/kata/55f2b110f61eb01779000053

// Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

// Note! a and b are not ordered!

// Example:
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// SOLUTION

function GetSum( a,b ) {
  var final = 0;
  if (a===b) {
    return b;
  } else {
    for (var i=Math.min(a, b); i<=Math.max(a, b); i++) {
      final+=i
    }
  }
  return final;
}