// http://www.codewars.com/kata/coding-3min-tidy-up-the-room/train/javascript

// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

// #Task:

// Give you a ```room```(n x n metrix), there are some sundries(any character except spaces). Our task is to put the sundries neatly placed in the upper left corner of the room(a small metrix)
// #Example:

// example1:
// ```
// room:[
// ["a"," "," "," "," "],
// [" "," ","b"," "," "],
// [" "," "," "," "," "],
// [" ","c"," "," "," "],
// [" "," ","d"," "," "]
// ]
// ```
// There are 4 sundries in the room(a,b,c,d), so we put them in the 2x2 matrix, output should be:
// ```
// [
// ["a","b"," "," "," "],
// ["c","d"," "," "," "],
// [" "," "," "," "," "],
// [" "," "," "," "," "],
// [" "," "," "," "," "]
// ]
// ```
// example2:
// ```
// room:[
// ["a"," "," "," "," "],
// [" "," ","b"," "," "],
// [" "," "," "," "," "],
// [" ","c"," "," "," "],
// [" "," ","d","e"," "]
// ]
// ```
// There are 5 sundries in the room(a,b,c,d,e), they cannot be put into the 2x2 matrix, so we put them in the 3x3 matrix, output should be:
// ```
// [
// ["a","b","c"," "," "],
// ["d","e"," "," "," "],
// [" "," "," "," "," "],
// [" "," "," "," "," "],
// [" "," "," "," "," "]
// ]
// ```

// SOLUTION

function sc(room){
  let trashArray = [];
  let final = [];
  for (let i=0; i<room.length; i++) {
    //creates blank room rows.
    final.push([]);
    for (let j=0; j<room.length; j++) {
      if (room[i][j] !== " ") {
        //adds non-blank spaces to an array to work with
        trashArray.push(room[i][j]);
      }
      //fills blank room rows with empty spaces.
      final[i].push(" ");
    }
  }
  //gets the size of the grid to add items to.
  let matrixLength = Math.ceil(Math.sqrt(trashArray.length));
  //iterates through the matrix spaces and adds items in order until none are left
  for (let i=0; i<matrixLength; i++) {
    for (let j=0; j<matrixLength; j++) {
        if (trashArray[0]) final[i][j] = trashArray[0];
        trashArray.shift();
    }
  }
  return final;
}
