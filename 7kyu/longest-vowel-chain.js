// https://www.codewars.com/kata/longest-vowel-chain/train/javascript

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring.

// SOLUTION

function solve(s){
  return Math.max(...s.split(/[^aeiou]/).map(a=>a.length));
}
