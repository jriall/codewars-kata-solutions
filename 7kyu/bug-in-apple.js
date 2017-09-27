// https://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9

// Find out "B"(Bug) in a lot of "A"(Apple).

// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

// input: string Array ```apple```

// output: Location of "B", ```[x,y]```

// SOLUTION

function sc(apple){
  for (var i=0; i<apple.length; i++) {
    for (var j=0; j<apple[i].length; j++) {
      if (apple[i][j] === "B") {
        return [i, j];
      }
    }
  }
}