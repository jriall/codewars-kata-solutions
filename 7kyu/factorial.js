// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript).

// More details about factorial can be found here: http://en.wikipedia.org/wiki/Factorial

// SOLUTIONS

function factorial(n) {
  var final = 1;
  if (n <0 || n>12) {
    throw(RangeError);
  }
  for (var i=n; i>0; i--) {
    final*=i;
  }
  return final;
}