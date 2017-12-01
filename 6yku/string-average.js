// https://www.codewars.com/kata/string-average/train/javascript

// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"

// SOLUTION

function averageString(str) {
  let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if (str.length === 0) return 'n/a';
  let invalid = false;
  let final = Math.floor(
    str.split(' ').reduce((a, b) => {
      if (nums.indexOf(b) > -1) {
        return a + nums.indexOf(b);
      } else {
        invalid = true;
        return a;
      }
    }, 0) / str.split(' ').length);
  return invalid? "n/a" : nums[final];
}