// https://www.codewars.com/kata/550fac5249073256380002c0

// Write a function to generate 'n' number of fibonacci series (0,1,1,2,3...) in reverse order . The output should be a string of fibonacci series in the reverse order upto the given number.

// eg.

// reverseFibo(3)  // => '110'
// reverseFibo(10) // => '3421138532110'

// SOLUTION

function reverseFibo(n){
  var final = [];
  var count = 1;
  var current = 0;
  var previous = 1;
  while (count <= n) {
    final.push(current);
    current+=previous;
    previous = current - previous;
    count++;
  }
  return final.reverse().join("");
}