// https://www.codewars.com/kata/552c028c030765286c00007d/solutions/javascript

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)



// SOLUTION

function iqTest(numbers){
  let arr = numbers.split(" ").map(a=>Number(a));
  let even = arr.filter(a=>a%2===0);
  let odd = arr.filter(a=>a%2===1);
  return even.length === 1 ? arr.indexOf(even[0])+1 : arr.indexOf(odd[0])+1;
}