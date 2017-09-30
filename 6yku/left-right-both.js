// https://www.codewars.com/kata/t-dot-t-t-dot-22-left-right-both/train/javascript

// You have a keyboard like this:

// (See image in the link)

// You strictly abide by the typing standard. That is, use the left hand hit the left part of the keyboard, use the right hand hit the right part of keyboard, the boundary is:

//  L  1.....5 | 6.....0      R
//  E   Q.....T | Y.....P     I
//  F    A.....G | H.....'    G
//  T     Z.....B | N...../   H
//           SPACEBAR         T
//    SpaceBar is an exception
// Because the two hand both can use the thumb to hit it
// Complete function leftRightOrBoth() that accepts a string text. If all the characters can be completed by the left hand, return "Left"; If all the characters can be completed by the right hand, return "Right"; If the characters are from both sides, return "Both". If text is empty or only contains space, please return an empty string ""

// SOLUTION

function leftRightOrBoth(text){
  let left = /[qwertasdfgzxcvb`~!@#$%12345]/gi;
  let right = /[yuiophjklnm^&*()67890\-_=+[{\]}\\|'";:,<.>\/?]/gi;
  let onlySpaces = /[ ]/gi;
  if (text.length === 0 || text.replace(onlySpaces, "").length === 0) {
    return "";
  } else if (text.replace(right, "").length === text.length) {
    return "Left";
  } else if (text.replace(left, "").length === text.length) {
    return "Right";
  }
  return "Both";
}