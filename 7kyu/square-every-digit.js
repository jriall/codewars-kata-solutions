// https://www.codewars.com/kata/546e2562b03326a88e000020

// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out.

// Note: The function accepts an integer and returns an integer

// SOLUTION

function squareDigits(num){
  return Number(num.toString().split("").map(a=>{return Number(a*a)}).join(""));
}