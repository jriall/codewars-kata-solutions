// https://www.codewars.com/kata/582c6b7cfb3179eb6e000027/solutions/javascript

// A camel at the base of a large sand dune wants to get to the top of it to see what is on the other side.

// The dune distance d and height h are as shown below:

//                               ....+
//                           ........|
//                       ............|
//                   ................| h
//               ....................|
//           ........................|
// Camel ----------------------------+
//                     d
// Steep dunes don't worry him because this is a smart camel!
// When the slope is > 30 degrees, then instead of going straight up he will zig-zag back and forth so the climb is not so steep.

// SOLUTION

function zigZagCamel(d,h) {
  let angle = Math.atan(h/d) * 180 / Math.PI;
  if (angle < 30) {
    return Math.sqrt(d*d + h*h);
  }
  return h*2;
}

zigZagCamel(10,5);