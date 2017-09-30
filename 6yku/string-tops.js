// https://www.codewars.com/kata/59b7571bbf10a48c75000070/solutions/javascript

// Write a function that accepts msg string and returns local tops of string from the highest to the lowest.
// The string's tops are from displaying the string in the below way:

//                                                       3
//                               p                     2   4
//             g               o   q                 1
//   b       f   h           n       r             z
// a   c   e       i       m          s          y
//       d           j   l             t       x
//                     k                 u   w
//                                         v
// The next top is always 1 character higher than the previous one. For the above example, the solution for the abcdefghijklmnopqrstuvwxyz1234 input string is 3pgb.

// When the msg string is empty, return an empty string.
// The input strings may be very long. Make sure your solution has good performance.

// SOLUTION

function tops(msg) {
  let tops = [];
  let count = 1;
  let curr = 0;
  let isTop = false;
  while (curr <= msg.length) {
    if (!isTop) {
      isTop = true;
    } else {
      isTop=false;
      tops.push(curr);
    }
    curr += count;
    count++;
  }
  return tops.reverse().map(a=>msg[a]).join("");
}