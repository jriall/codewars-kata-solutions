// https://www.codewars.com/kata/max-min-arrays/javascript

// In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// SOLUTION

function solve(arr){
    let final = [];
    let working = [...arr].sort((a,b)=>b-a);;
    while (final.length < arr.length -1) {
      final.push(working.shift(), working.pop());
    }
    return final.concat(working);
}