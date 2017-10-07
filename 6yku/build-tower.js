// https://www.codewars.com/kata/build-tower/train/javascript

// Build Tower

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]

// SOLUTION

function towerBuilder(nFloors) {
  let tower = [];
  let count = nFloors;
  while (count > 0) {
    tower.unshift(" ".repeat(nFloors-count) + "*".repeat(count * 2 - 1) + " ".repeat(nFloors-count));
    count--;
  }
  return tower;
}