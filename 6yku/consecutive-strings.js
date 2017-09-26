// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// SOLUTION

function longestConsec(strarr, k) {
  let final = "";
  if (strarr.length === 0 || strarr.length < k || k<= 0) {
    return final;
  }
  let temp;
  let count = 0;
  for (let i=0; i<strarr.length; i++) {
    temp = strarr.slice(i,i+k).join("").length;
    if (temp > count) {
      final = strarr.slice(i,i+k).join("");
      count = temp;
    }
  }
  return final;
}