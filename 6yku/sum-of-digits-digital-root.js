// https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript

// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// SOLUTION

function digital_root(n) {
  let final = n.toString().split('').map(a => Number(a)).reduce((a, b) => a + b);
  return final.toString().length > 1 ? digital_root(final) : final;
}