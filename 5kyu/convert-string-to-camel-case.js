// https://www.codewars.com/kata/convert-string-to-camel-case/javascript

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Examples:

// // returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior")

// // returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

// SOLUTION

function toCamelCase(str){
  return str.split(/-|_/).map((a,i)=>`${i===0?a.substr(0,1):a.substr(0,1).toUpperCase()}${a.substr(1).toLowerCase()}`).join("");
}
