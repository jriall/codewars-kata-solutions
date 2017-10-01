// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/solutions/javascript

// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdEf"
// capitalize("abcdef",[1,2,5,100]) = "aBCdEf". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// SOLUTION

function capitalize(s,arr){
  return s.split("").map((a,i) =>{
    return arr.includes(i) ? a.toUpperCase() : a;
  }).join("");
}