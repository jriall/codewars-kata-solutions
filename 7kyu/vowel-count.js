// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// SOLUTION

function getCount(str) {
  return str.length - str.replace(/[aeiou]/gi, "").length;
}