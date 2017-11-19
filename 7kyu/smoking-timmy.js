// https://www.codewars.com/kata/smoking-timmy/javascript

// Timothy (16yo) really likes to smoke unfortunately he is too young to buy his own cigarettes and thats why he has to be extremely efficient in smoking.

// a bar has 10 boxes of cigarettes
// a box has 18 cigarettes
// out of 5 cigarettes ends Timothy is able to create a new one
// of course the self made cigarette also has an end wich can be used to create a new cigarette
// It's now your task to create a function startSmoking(bars,boxes) or start_smoking(bars,boxes) in python that calculates how many cigarettes Timothy can smoke out of the given amounts of bars and boxes.

// Please mention that Timothy never starts smoking cigarettes that aren't full size so the amount of smoked cigarettes is always an integer.

// SOLUTION

function startSmoking(bars,boxes){
  let fullCigarettes = ((bars * 10) + boxes) * 18;
  let final = fullCigarettes;
  while (fullCigarettes >=1) {
    fullCigarettes /= 5;
    final+=fullCigarettes;
  }
  return Math.floor(final);
}