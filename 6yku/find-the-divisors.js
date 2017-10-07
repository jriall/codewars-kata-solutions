// https://www.codewars.com/kata/find-the-divisors/train/javascript

// Create a function named divisors/Divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
// You can assume that you will only get positive integers as inputs.

// SOLUTION

function divisors(integer) {
  let final = [];
  for (var i=2; i<integer; i++) {
    if (integer % i === 0) final.push(i);
  }
  return final.length === 0 ? `${integer} is prime` : final;
}