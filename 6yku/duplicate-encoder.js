// https://www.codewars.com/kata/duplicate-encoder/train/javascript

// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples:

// "din" => "((("

// "recede" => "()()()"

// "Success" => ")())())"

// "(( @" => "))(("

//SOLUTION

function duplicateEncode(word){
    return word.split("").map(a => {
      let re = new RegExp(`[${a}]`, "gi");
      if (word.match(re).length > 1) {
        return ")";
      } else {
        return "(";
      }
    }).join("");
}