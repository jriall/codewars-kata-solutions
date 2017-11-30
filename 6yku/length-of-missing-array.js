// https://www.codewars.com/kata/length-of-missing-array/javascript

// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.


// SOLUTION

function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays || arrayOfArrays.indexOf(null) > -1) return 0;
  let blank = false;
  let final =  arrayOfArrays.sort((a,b)=>a.length-b.length).reduce((a,b,i,arr)=>{
    if (b.length === 0) {
      blank = true;
      return a;
    }
    if(i>0) {
      if(b.length!==arr[i-1].length+1) {
        a=b.length-1;
      }
    }
      return a;
  },0)
  return !blank ? final: 0;
}