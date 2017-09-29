// https://www.codewars.com/kata/52f3149496de55aded000410

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5
// Let's assume that all numbers in the input will be integer values.

// SOLUTION

function sumDigits(number) {
  var working = number.toString().split("");
  var final = 0;
  for (var i=0; i<working.length; i++) {
    if (!isNaN(working[i])) {
      final+=parseInt(working[i]);
    }
  }
  return final;
}