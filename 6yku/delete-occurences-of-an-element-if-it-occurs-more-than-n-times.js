// https://www.codewars.com/kata/delete-occurrences-of-an-element-if-it-occurs-more-than-n-times/train/javascript

// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

// Example

//   deleteNth ([1,1,1,1],2) // return [1,1]

//   deleteNth ([20,37,20,21],1) // return [20,37,21]

// SOLUTION

function deleteNth(arr, x) {
  const used = [];
  return arr.filter(a => {
    if (used.filter(b => b === a).length < x) {
      used.push(a);
      return a;
    }
  });
}