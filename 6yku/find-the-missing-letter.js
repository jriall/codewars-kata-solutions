// https://www.codewars.com/kata/find-the-missing-letter/train/javascript

// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

SOLUTION

function findMissingLetter(arr) {
  let str = arr.join("");
  for (let i=0; i<arr.length-1; i++) {
    if (str.charCodeAt(i) !== str.charCodeAt(i+1) -1) {
      return String.fromCharCode(str.charCodeAt(i)+1);
    }
  }
}