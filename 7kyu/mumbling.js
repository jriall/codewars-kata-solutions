// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// SOLUTION

function accum(s) {
  s.split("");
  var final = [];
  for (var i=0; i<s.length; i++) {
    final.push(s[i].toUpperCase() + s[i].repeat(i).toLowerCase());
  }
  return final.join("-");
}
