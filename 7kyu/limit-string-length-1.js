// https://www.codewars.com/kata/5208fc3cb613bc725f000142

// Complete the solution, so that it returns the truncated version of the string followed by '...'.

// Example:

// solution('Testing String',3) // should return 'Tes...'
// solution('Testing String',8) // should return 'Testing ...'
// solution('Test',8) // should return 'Test'

// SOLUTION

function solution(string,limit){
    var final = "";
    if (string.length<=limit) {
      return string;
    }
    for (var i=0; i<limit; i++) {
      final+=string[i];
    }
    return final+"..."
}