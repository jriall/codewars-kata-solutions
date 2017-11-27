// https://www.codewars.com/kata/convert-hash-to-an-array/javascript

// Convert a hash into an array. Nothing more, Nothing less.

//   {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

//   [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

// SOLUTION

function convertHashToArray(hash){
  return Object.keys(hash).sort().map(a=>[a, hash[a]]);
}