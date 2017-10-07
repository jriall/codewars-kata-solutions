// https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/train/javascript

// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:

// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

SOLUTION

function encrypt(text, n) {
  if(text === null) return null;
  let final = text;
  while (n >= 1) {
    let firstHalf = '';
    let secondHalf = '';
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        secondHalf += final[i];
      } else {
        firstHalf += final[i];
      }
    }
    final = firstHalf + secondHalf;
    n--;
  }
  return final;
}
function decrypt(encryptedText, n) {
  if(encryptedText === null) return null;
  let final = encryptedText;
  while (n >= 1) {
    let temp = '';
    for (let i = 0; i < encryptedText.length/2; i++) {
      temp+=final[i+(Math.floor(final.length/2))]+final[i];
    }
    if (temp.length === final.length) {
      final = temp;
    } else {
      final = temp.substring(0, temp.length - 1);
    }
    n--;
  }
  return final;
}