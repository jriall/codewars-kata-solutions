// https://www.codewars.com/kata/convert-pascalcase-string-into-snake-case/javascript

// Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.

// Examples:

// //  returns test_controller
// toUnderscore('TestController');

// // returns movies_and_books
// toUnderscore('MoviesAndBooks');

// // returns app7_test
// toUnderscore('App7Test');

// // returns "1"
// toUnderscore(1);

// SOLUTION

function toUnderscore(string) {
  if (typeof string === "number") return string.toString();
  return string.split("").map((a,i)=>{
    return i === 0 ? a.toLowerCase() : a.toUpperCase() === a && a.match(/[a-z]/i) ? "_" + a.toLowerCase() : a;
  }).join("");
}