// https://www.codewars.com/kata/triple-trouble-1/javascript

// Write a function

// tripledouble(num1,num2)
// which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.
// For example:
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1
// If this isn't the case, return 0

// SOLUTION

function tripledouble(num1, num2) {
  let triple = num1.toString().match(/(\d)\1\1/g);
  console.log(triple)
  if (triple) {
    for (let i=0; i<triple.length; i++) {
      let re = new RegExp(`(${triple[i][0]})\\1`);
      if (num2.toString().match(re)) return 1;
    }
  }
  return 0;
}