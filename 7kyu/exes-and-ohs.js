// https://www.codewars.com/kata/55908aad6620c066bc00002a

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// SOLUTION

function XO(str) {
  var x = str.match(/x/gi);
  var o = str.match(/o/gi)
  if (!x && !o) {
    return true;
  } else if (x && !o || !x && o) {
    return false;
  } else {
    return x.length === o.length;
  }
}