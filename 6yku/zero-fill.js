// https://www.codewars.com/kata/zero-fill-dot-dot-dot-for-the-queen/train/javascript

// Queen of the Forest needs a function that will add a specified quantity of leading zeros to any given number.

// For example, if a 5-digit number is needed, and we pass in 11, the returned value would be 00011. There are many ways to achieve this. Additionally, if the size passed is less than the length of number, just return the number as a string. Let's have one that would be both useful and good performance-wise.

// NOTES:

// 1) Numbers passed only - no strings, objects, functions, etc.

// 2) Whole positives only - negatives converted, decimals dropped (provided in solution setup)

// SOLUTION

function zeroFill(number, size) {
  number = Math.abs(~~number); // whole positive integer
  const str = number.toString();
  return str.length > size ? str : '0'.repeat(size - str.length) + str;
}