// https://www.codewars.com/kata/vasya-clerk/train/javascript

// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

// ###Examples:

// // === JavaScript ==

// tickets([25, 25, 50]) // => YES
// tickets([25, 100])
//         // => NO. Vasya will not have enough money to give change to 100 dollars

// SOLUTION

function tickets(arr) {
  let change = {
    25: 0,
    50: 0,
    100: 0
  };
  for (let i=0; i<arr.length; i++) {
    switch(arr[i]) {
      case 25:
        change[25]++;
        break;
      case 50:
        if (change[25] >= 1) {
          change[25]--;
          change[50]++;
          break;
        } else {
          return "NO";
        }
        break;
      case 100:
        if (change[50] >=1 && change[25] >= 1) {
          change[25]--;
          change[50]--;
          change[100]++;
        } else if (change[25] >=3) {
          change[25]-=3;
          change[100]++;
        } else {
          return "NO";
        }
        break;
    }
  }
  return "YES";
}