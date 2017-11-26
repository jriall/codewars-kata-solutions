// https://www.codewars.com/kata/count-characters-in-your-string/train/javascript

// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

// SOLUTION

function count(string) {
  return string.split('').reduce((a, b) => {
    a[b] = (a[b]||0)+1;
    return a;
  }, {});
}