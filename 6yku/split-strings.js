// https://www.codewars.com/kata/split-strings/javascript

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

// SOLUTION

function solution(str){
  if (str.length % 2 === 1) str+="_";
  let final = [];
  for (let i=0; i<str.length; i+=2) {
    final.push(str.substr(i,2));
  }
  return final;
}