// https://www.codewars.com/kata/odd-heavy-array/train/javascript

// An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

// eg.

// Array [11,4,9,2,8] is odd-heavy
// because:- its odd elements [11,9] are greater than all the even elements [4,2,8]

// Array [11,4,9,2,3,10] is not odd-heavy
// because:- one of it's even element 10 from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]
// write a function called isOddHeavy that accepts an integer array and returns true if the array is odd-heavy else return false.

// SOLUTION

function isOddHeavy(n){
  let odd = [];
  let even = [];
  for (let i=0; i<n.length; i++) {
    if (n[i]%2===1 || n[i]%2===-1) {
      odd.push(n[i]);
    } else {
      even.push(n[i]);
    }
  }
  if (odd.length <1) {
    return false;
  }
  for (let i=0; i<odd.length; i++) {
    for (let j=0; j<even.length; j++) {
      if (odd[i] < even[j]) {
        return false;
      }
    }
  }
  return true;
}