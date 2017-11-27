// https://www.codewars.com/kata/find-a-word-sequence/

// Description:

// Find a special word sequence that the tail of each word is the same as the head of the next word(the tail of last word is same as the head of first word).

// A global variable wordList is preloaded(given by a string array and all words are lowercase). All words should select from wordList.

// An argument headTail will be given, like this:

//  "c4d4e8"
// It means:

//  Three word should be find out
//  First word is "c??d"
//  (head is "c",tail is "d", length is 4)
//  Second word is "d??e"
//  (head is "d",tail is "e", length is 4)
//  Third word is "e??????c"
//  (head is "e",tail is "c", length is 8)
// The number between head and tail is the length of word. It always be a positive integer.

// The result should be an array that contains all words:

//  The result of example above should be one of:
//  ['card','date','economic']
//  ['cold','date','economic']
// If no valid result found, return an empty array [].

// SOLUTION

function findWordSequence(headTail) {
  let final = [];
  let splitten = headTail.split("").map(a=>/[a-z]/.test(a)?" "+a:a).join("").trim().split(" ");
  for (let i=0; i<splitten.length; i++) {
    let re = new RegExp(`^${splitten[i].substr(0,1)}.{${splitten[i].substr(1)-2}}${splitten[i+1]?splitten[i+1].substr(0,1):splitten[0].substr(0,1)}$`);
    let wordArr = wordList.filter(a=>re.test(a));
    if (wordArr.length > 0) {
      final.push(wordArr[0]);
    } else {
      return [];
    }
  }
  return final;
}