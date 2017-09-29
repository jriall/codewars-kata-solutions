// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// x Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// SOLUTION

function findShort(s){
  var splitten = s.split(" ");
  var final = 100;
  for (var i=0; i<splitten.length; i++) {
    if (splitten[i].length < final) {
      final= splitten[i].length;
    }
  }
  return final;
}