// https://www.codewars.com/kata/human-readable-time/javascript

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// SOLUTION

function humanReadable(seconds) {
  let hours = Math.floor(seconds/3600);
  let mins = Math.floor((seconds-(hours*3600))/60);
  let secs = seconds-(hours*3600)-(mins*60)
  return `${hours<10?"0"+hours:hours}:${mins<10?"0"+mins:mins}:${secs<10?"0"+secs:secs}`;
}