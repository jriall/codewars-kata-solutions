// https://www.codewars.com/kata/largest-5-digit-number-in-a-series/javascript

// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 digits.

// Complete the solution so that it returns the largest five digit number found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

// Adapted from ProjectEuler.net

// SOLUTION

function solution(digits){
  return Number(digits.toString().split("").reduce((a,b,i,arr)=>{
    let temp = `${arr[i]}${arr[i+1]}${arr[i+2]}${arr[i+3]}${arr[i+4]}`;
    if (i<arr.length-4) {
      if (temp > a) {
        a = temp;
      }
    }
    return a;
  },0));
}
