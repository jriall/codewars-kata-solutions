// https://www.codewars.com/kata/53d2697b7152a5e13d000b82

// Write a function that takes a list (in Python) or array (in other languages) of numbers, and makes a copy.

// Note that you may have troubles if you do not return an actual copy, item by item, not just a pointer or an alias for an existing list or array.

// If not list or array is given as a parameter, the function should raise an error.

// Examples:

// t = [1,2,3,4]
// tCopy = copyList(t)
// t[1] += 5
// t == [1,7,3,4]
// tCopy = [1,2,3,4]

// SOLUTION

function copyList(l){
  var final = [];
  for (var i=0; i<l.length; i++) {
    final.push(l[i]);
  }
  return final;
}