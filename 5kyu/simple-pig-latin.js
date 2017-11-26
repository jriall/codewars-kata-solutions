// https://www.codewars.com/kata/simple-pig-latin/javascript

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldWay !

// SOLUTION

function pigIt(str){
  return str.split(" ").map(a=>a.substr(1)+a.substr(0,1)+"ay").join(" ");
}