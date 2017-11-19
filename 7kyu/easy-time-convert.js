// https://www.codewars.com/kata/5a084a098ba9146690000969/solutions/javascript

// This challenge requires you to convert an integer. If the input is 78, then your program should output the string '01:18' because 78 minutes converts to 1 hour and 18 minutes. If the input is 0 or negative value, then your program should output the string '00:00'

// We will use the modulo operation to solve this challenge. The modulo operation simply returns the remainder after a division, so for example, the remainder of 5 / 2 is 1, so the modulo of 5 / 2 is 1.

// SOLUTION

function timeConvert(num) {
  if (num < 1) return "00:00";
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  return `${hours<10?"0"+hours:hours}:${minutes<10?"0"+minutes:minutes}`
}