// https://www.codewars.com/kata/58039f8efca342e4f0000023

// Create a function that takes a string as a parameter and does the following, in this order:

// replaces every letter with the letter following it in the alphabet (see note below)
// makes any vowels capital
// makes any consonants lower case
// Note: the alphabet should wrap around, so Z becomes A

// So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

// SOLUTION

function changer(str) {
   return str.split("").map(a=>{
    let unicode = a.charCodeAt(0);
    if ((unicode >= 65 && unicode < 90) || (unicode >= 97 && unicode < 122)) {
      return String.fromCharCode(unicode+1);
    } else if (unicode === 122 || unicode === 90) {
      return "A";
    }
    return a;
    }).map(b=>{
            if(/[aeiouAEIOU]/.test(b)) {
        return b.toUpperCase();
      }
      return b.toLowerCase();
    }).join("");
}