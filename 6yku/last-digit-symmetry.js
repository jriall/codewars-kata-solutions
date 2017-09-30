// https://www.codewars.com/kata/59a9466f589d2af4c50001d8

// Consider the number 1176 and its square (1176 * 1176) = 1382976. Notice that:

// a) the first two digits of 1176 form a prime.

// b) the first two digits of the square 1382976 form a prime.

// c) the last two digits of 1176 and 1382976 are the same.

// Given two numbers representing a range, how many numbers satisfy this property within that range?

// solve(2,1200) = 1, because only 1176 satisfies this property within the range 2 < n < 1200. See test cases for more examples. The upper bound for the range will not exceed 1,000,000.

// SOLUTION

function isPrime(a) {
  for (let i = 2; i < a; i++) if (a % i === 0) return false;
  return a !== 1;
}

function findFirstTwo(a) {
  return Number(a.toString().slice(0, 2));
}

function findLastTwo(a) {
  return Number(a.toString().slice(a.toString().length - 2));
}

function solve(a, b) {
  let count = 0;
  for (let i = a + 1; i < b; i++) {
    if (
      isPrime(findFirstTwo(i)) &&
      isPrime(findFirstTwo(i * i)) &&
      (findLastTwo(i) === findLastTwo(i * i))
    ) {
      count++
    }
  }
  return count;
}