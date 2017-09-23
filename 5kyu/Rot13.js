// https://www.codewars.com/kata/rot13-1/train/javascript

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// SOLUTION

function rot13(str) {
  let final = [];
  for (var i = 0; i < str.length; i++) {
    if ((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 109)) {
      final.push(String.fromCharCode(str.charCodeAt(i) + 13));
    } else if ((str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 110 && str.charCodeAt(i) <= 122)) {
      final.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
    final.push(str[i]);
    }
  }
  return final.join("");
}