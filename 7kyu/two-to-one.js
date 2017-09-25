// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

// SOLUTION

function longest(s1, s2) {
  var final = [];
  var splitten = (s1+s2).split("");
  for (var i=0; i<splitten.length; i++) {
    if (final.indexOf(splitten[i]) === -1) {
      final.push(splitten[i]);
    }
  }
  return final.sort().join("");
}