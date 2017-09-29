// https://www.codewars.com/kata/5722cc50785220ac8b00129b

// Define a function, babel, which accepts a positive integer argument height and returns a string representing a tower of the specified height. If the height is 0 then return an empty string. Input validation is not required.

// Some examples below:

// babel(0) === ``

// babel(1) === `o
// o
// o`

// babel(2) === ` o
//  o
//  o
// ooo
// ooo
// ooo`

// babel(3) === `  o
//   o
//   o
//  ooo
//  ooo
//  ooo
// ooooo
// ooooo
// ooooo`

// babel(4) === `   o
//    o
//    o
//   ooo
//   ooo
//   ooo
//  ooooo
//  ooooo
//  ooooo
// ooooooo
// ooooooo
// ooooooo`

// babel(5) === `    o
//     o
//     o
//    ooo
//    ooo
//    ooo
//   ooooo
//   ooooo
//   ooooo
//  ooooooo
//  ooooooo
//  ooooooo
// ooooooooo
// ooooooooo
// ooooooooo`

// SOLUTION

function babel(height) {
  let final = "";
  if (height === 0) {
    return "";
  }
  for (var i=1; i<=height; i++) {
    let newLine = " ".repeat(height-i) + "o".repeat((i*2)-1) + "\n";
    final+= newLine.repeat(3);
  }
  return final.slice(0, final.length-1);
}