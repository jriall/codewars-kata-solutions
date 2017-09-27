// https://www.codewars.com/kata/59bc0059bf10a498a6000025

// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

// Example:

// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';

// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham

// SOLUTION

function mutateMyStrings(stringOne, stringTwo){
  let final = stringOne + "\n";
  let working = stringOne.split("");
  for (let i=0; i<stringOne.length; i++) {
    if (stringOne[i] !== stringTwo[i]) {
      working[i] = stringTwo[i];
      final+=working.join("") + "\n";
    }
  }
  return final;
}