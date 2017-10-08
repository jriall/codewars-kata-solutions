// https://www.codewars.com/kata/string-breakers/train/javascript

// I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

// Example:

// N = 5;

// String = "This is an example string";

// Return value:
// Thisi
// sanex
// ample
// strin
// g

// Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'

// SOLUTION

function stringBreakers(n, string){
  let final = [];
  let joined = string.replace(/\W/g, "");
  for (let i=0; i<joined.length; i+=n) {
    final.push(joined.substr(i, n));
  }
  return final.join("\n");
}