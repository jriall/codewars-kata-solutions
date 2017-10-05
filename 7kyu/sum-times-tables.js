// https://www.codewars.com/kata/sum-times-tables/train/javascript

// Write a function sumTimesTables which sums the result of the sums of the elements specified in tables multiplied by all the numbers in between min and max including themselves.

// For example, for sumTimesTables([2,5],1,3) the result should be the same as

// 2*1 + 2*2 + 2*3 +
// 5*1 + 5*2 + 5*3
// i.e. the table of two from 1 to 3 plus the table of five from 1 to 3

// All the numbers are integers but you must take in account:

// tables could be empty.
// min could be negative.
// max could be really big.

// SOLUTION

function sumTimesTables(tables, min, max) {
  const args = Array.prototype.slice.call(arguments);
  const arr = [];
  for (let i=min;i<=max;i++) {
    arr.push(i);
  }
  let final = 0;
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<args[0].length; j++) {
      final+=arr[i]*args[0][j];
    }
  }
  return final;
}

//REFACTOR

function sumTimesTables(tables,min,max){
  const final = [];
  for (let i=min; i<=max; i++) {
    final.push(i);
  }
  return final.reduce((a,b)=>{
    return a + tables.reduce((c,d) => {
      return c + d*b;
    },0);
  },0);
}