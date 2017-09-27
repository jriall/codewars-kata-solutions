// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 0 and 50.

// Example: Integer = 3; I expect a 3x3 square back just like below as a string.

// Solution:

// +++
// +++
// +++

// SOLUTION

function generateShape(int){
  var final = "";
  for (let i=1; i<=int; i++) {
    final+="+".repeat(int);
    if (i !== int) {
      final+="\n";
    }
  }
  return final;
}