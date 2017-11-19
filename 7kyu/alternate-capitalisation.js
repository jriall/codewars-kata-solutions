// https://www.codewars.com/kata/alternate-capitalization/train/javascript

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// SOLUTION

function capitalize(s){
  return [s.split("").map((a,i)=>i%2===0?a.toUpperCase():a).join(""), s.split("").map((a,i)=>i%2!==0?a.toUpperCase():a).join("")];
};