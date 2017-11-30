// https://www.codewars.com/kata/only-duplicates/train/javascript

// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

// SOLUTION

function onlyDuplicates(str) {
  return str.split("").filter(a=>{
    let re = new RegExp(a, "g")
    return str.replace(re, "").length<str.length-1;
  }).join("");
}