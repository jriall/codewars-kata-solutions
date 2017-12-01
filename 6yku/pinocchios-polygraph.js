// https://www.codewars.com/kata/pinocchios-polygraph/train/javascript

// Each time when Pinocchio is not telling the truth his nose should become longer.

// Task:

// Write function which determines if pinocchio is telling the truth.
// function extendPinocchiosNose(words){
//   //return true if lying,false otherwise.
// }
// When pinocchio is lying he stutter a bit.If word1 is followed by word2 where word2 contains whole word1(case insensitive) you can tell that pinocchio is lying.

// //lies examples
// -"I am goo good person" //"good" contains "goo"
// -"In real story they didnt hanged m me" //"me" contains "m"
// -"It is geppetos fault,i would be Good good if not him" //"good" contains "Good"

// SOLUTION

function extendPinocchioNose(words){
  return words.split(" ").reduce((a,b,i,arr)=>{
    if (i<arr.length-1) {
      if (arr[i+1].indexOf(b)>-1) {
        a++;
      }
    }
    return a;
  },0) > 0 ? true : false
}