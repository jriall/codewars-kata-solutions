// https://www.codewars.com/kata/58daa7617332e59593000006

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// SOLUTION

function findLongest(array){
  var count = 0;
  var final;
  for (var i=0; i<array.length; i++) {
    if (String(array[i]).length > count) {
      count = String(array[i]).length;
      final = array[i];
    }
  }
  return final;
}