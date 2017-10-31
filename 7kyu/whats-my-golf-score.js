// https://www.codewars.com/kata/whats-my-golf-score/train/javascript

// I have the par value for each hole on the golf course and my stroke score on each hole. Im tired of calculating it by hand. Can you write a program that calculates my golf score for me?

// Rules:

// Golf Score & Par Score will be strings.

// Golf Score length and Par Score length will always match.

// SOLUTION

function golfScoreCalculator(parList, scoreList){
  return scoreList.split('').reduce((a, b, index) => a + (Number(b) - Number(parList[index])), 0);
}
