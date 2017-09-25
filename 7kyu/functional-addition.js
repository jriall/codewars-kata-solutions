// https://www.codewars.com/kata/538835ae443aae6e03000547

// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// var addOne = add(1);
// addOne(3); // 4

// var addThree = add(3);
// addThree(3); // 6

// SOLUTION

function add(n) {
  return function adder(b) {
    return b+n;
  }
}