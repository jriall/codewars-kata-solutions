// https://www.codewars.com/kata/59a1ec603203e862bb00004f

/*
function :-checkConcatenatedSum
inputs:- integers representing orginal number and number of times each digit should be repeated
output:- true of concatenated sum gives orginal number else false
*/

// SOLUTION

function checkConcatenatedSum(numero, times) {
  var working = numero;
  if (working < 0) {
    return numero.toString().split("").slice(1, numero.length).map(a=>Number(a.repeat(times))).reduce((a,b)=>a+b) === -numero;
  } else {
    return numero.toString().split("").map(a=>Number(a.repeat(times))).reduce((a,b)=>a+b) === numero;
  }
}