// https://www.codewars.com/kata/unique-in-order/train/javascript

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// SOLUTION

const uniqueInOrder = (input) => {
  let working = input;
  if (typeof input === "string") working = input.split("");
  let final = [];
  for (let i=0; i<working.length; i++) {
    if (final[final.length-1] !== working[i]) {
      final.push(working[i]);
    }
  }
  return final;
};