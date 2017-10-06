// https://www.codewars.com/kata/are-they-the-same/train/javascript

// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// SOLUTION

function comp(array1, array2){
  if (array1 === null || array2 === null) return false;
  let arr1SquaredAndSorted = array1.map(a=>a*a).sort((a,b)=>a-b);
  let arr2Sorted = array2.sort((a,b)=>a-b);
  if(arr1SquaredAndSorted.length !== arr2Sorted.length) return false;
  for(var i = arr1SquaredAndSorted.length; i--;) {
    if(arr1SquaredAndSorted[i] !== arr2Sorted[i]) return false;
  }
  return true;
}