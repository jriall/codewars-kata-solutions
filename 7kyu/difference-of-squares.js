// https://www.codewars.com/kata/558f9f51e85b46e9fa000025

// Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum. For example, when n = 10:

// The square of the sum of the first ten natural numbers is:

// (1 + 2 + ... + 10)**2 = 55**2 = 3025

// The sum of the squares of first ten natural numbers is :

// 1**2 + 2**2 + ... + 10**2 = 385

// Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is 3025 - 385 = 2640.

// Example

// differenceOfSquares(10) // => 2640

// SOLUTION

function differenceOfSquares(x){
  var sumThenSquare = [...Array(x).keys()].map(a=>a+=1);
  return Math.pow(sumThenSquare.reduce((a, b)=>{return a+b;}), 2) - sumThenSquare.reduce((a, b)=>{return a+Math.pow(b,2)});
}