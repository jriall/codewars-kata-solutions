// https://www.codewars.com/kata/5a19226646d843de9000007d/solutions/javascript

// Write a function that counts the number of unique consonants in a string.

// Consonants are letters used in English other than 'a', 'e', 'i', 'o', 'u'. We will count 'y' as a consonant.

// Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since 'd' is a duplicate.

// Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1.

// SOLUTION

function countConsonants(str) {
  return str.toLowerCase().replace(/[^a-z]|[aeiou]/g, "").split("").filter((a,i,arr) => arr.indexOf(a) === i).length
}