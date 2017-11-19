// https://www.codewars.com/kata/numbers-in-strings/train/javascript

// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// SOLUTION

function solve(s){
  const re = new RegExp(/\D/, "gi");
  return Number(s.split(re).sort((a,b)=>b-a)[0]);
}
