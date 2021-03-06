// https://www.codewars.com/kata/59c0cdbd5fb133c82b00007d

// Here at Conformity Inc. we only like even things. We need you to put a stop to anything that does not conform to our strict even only policy.

// Write a function that will convert any number to its nearest even number. When the number is halfway between two even numbers it should round away from zero.

// Examples

// 1 => 2

// 0.5 => 0

// -1 => -2

// -0.5 => 0

// SOLUTION

function ensureEven(n) {
  if (n>0) {
    return n%2 < 1 ? Math.floor(n/2)*2 : Math.ceil(n/2)*2;
  }
  return n%2 > -1 ? Math.ceil(n/2)*2 : Math.floor(n/2)*2;
}