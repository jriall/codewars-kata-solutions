// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/solutions/javascript

// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.

// Example:

// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
// reverseWords("double  spaces"); // returns  "elbuod  secaps"

// SOLUTION

function reverseWords(str) {
  return str.split(" ").map(a=>a.split("").reverse().join("")).join(" ");
}