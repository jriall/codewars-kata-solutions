// https://www.codewars.com/kata/camelcase-method/train/javascript

// Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// SOLUTION

String.prototype.camelCase=function(){
  return this.split(" ").map(a=>a.substr(0,1).toUpperCase()+a.substr(1).toLowerCase()).join("");
}