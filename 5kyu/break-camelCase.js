// https://www.codewars.com/kata/break-camelcase/javascript

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example

// solution('camelCasing') // => should return 'camel Casing'

// SOLUTION

function solution(string) {
  return string.split("").map(a=>a===a.toUpperCase()?" "+a:a).join("");
}
