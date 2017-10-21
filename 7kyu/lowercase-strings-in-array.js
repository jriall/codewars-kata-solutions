// https://www.codewars.com/kata/lowercase-strings-in-array/train/javascript

// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

// Example

// arrayLowerCase(['Red', 'Green']) => ['red', 'green']
// arrayLowerCase([1, 'Green']) => [1, 'green']

// SOLUTION

function arrayLowerCase(arr) {
  return arr.map((a) => typeof a === 'string' ? a.toLowerCase() : a);
}
