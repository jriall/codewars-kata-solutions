// https://www.codewars.com/kata/54da5a58ea159efa38000836

// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// SOLUTION

function findOdd(A) {
  for (let i=0; i<A.length; i++) {
    let newArr = A.filter((a)=>{
      return a===A[i];
    });
    if (newArr.length % 2 === 1) {
      return A[i];
    }
  }
}