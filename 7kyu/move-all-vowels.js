// https://www.codewars.com/kata/move-all-vowels/train/javascript

// Given a string as input, move all of its vowel to the end of the string.

// Example input: day Example output: dya

// Example input: apple Example output: pplae

// Note: All input string are of small letters, and the order of the vowels at the end should be the same as they were before.

// SOLUTION

function moveVowel(input) {
  let consts = [];
  let vowels = [];
  for (let i = 0; i < input.length; i++) {
    if (["a", "e", "i", "o", "u"].indexOf(input[i].toLowerCase()) > -1) {
      vowels.push(input[i]);
    } else {
      consts.push(input[i]);
    }
  }
  return consts.concat(vowels).join("");
}
