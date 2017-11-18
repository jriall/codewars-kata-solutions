// https://www.codewars.com/kata/reversed-message/train/javascript

// Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

// Example:

// reverseMessage('This is an example of a Reversed Message!');
// Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

// SOLUTION

function reverseMessage(str) {
  if (str.length === 0) return str;
  return str.toLowerCase().split("").reverse().join("").split(" ").map(a => a[0].toUpperCase() + a.slice(1) ).join(" ");
}