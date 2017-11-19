// https://www.codewars.com/kata/5a088d8e80171fcd8800006b/solutions/javascript

// A gym plans to offer a new service campaign about nutrition advice in relation to sporting activities. Initially each member´s daily calorie requirement has to be calculated.

// There are various ways of calculating the amounts of calories needed to maintain energy balance for various gender and age groups at different levels of physical activity. One of the most accurate formulas used to calculate a person´s daily calorie demand is the Mifflin-St Jeor formula.

// Before applying the formula it is important to know a person´s gender, weight (kg), height (cm), age (y) and activity factor. By knowing all of these factors the calculation can be done in two simple steps:

// Step 1: Calculation of “Resting Metabolic Rate” (RMR):

// RMR Men = 10 x weight (kg) + 6.25 x height (cm) - 5 x age (y) + 5
// or
// RMR Women = 10 x weight (kg) + 6.25 x height (cm) - 5 x age (y) – 161
// Step 2: RMR multiplied by activity factor:

// a) little activity, activity factor = 1.2
// b) moderately active,  activity factor  = 1.55
// c) very active,  activity factor  = 1.7
// d) extremely active,  activity factor = 1.9
// Example: Susi, female, 29 years old, 170 cm, 60 kg: RMR = 600 + 1062,5 -145 – 161 = 1356,5 kcal/day. If she is moderately active her activity factor is 1.55. Hence her daily calorie requirement is 1356,5 * 1.55 = 2102,58 kcal/day.

// Task:

// Write a function that takes in an array containing a gym member´s personal details. The array will always be sorted like this:

// [name, gender (m/f), age (y), height (cm), weight (kg), activity level]

// e.g. [“Susi”, “f”, 29, 170, 60, “moderately active”]

// The function should then apply the Mifflin-St Jeor formula to calculate the member´s daily calorie requirement in kcal/day. The calculation should be rounded to 2 decimal digits.

// The final result of the function should be a sentence saying “XY´s daily calorie requirement is XY kcal.”.

// e.g. “Susi´s daily calorie requirement is 2102.58 kcal.”


// SOLUTION

function calorie (m){
  let final;
  let RMR = 10*m[4]+6.25*m[3]-5*m[2]+5;
  if (m[1] ==="f") RMR-=166;
  switch(m[5]) {
    case "little activity":
      final = RMR * 1.2;
      break;
    case "moderately active":
      final = RMR * 1.55;
      break;
    case "very active":
      final = RMR * 1.7;
      break;
    case "extremely active":
      final = RMR * 1.9;
      break;
  }
  return `${m[0]}´s daily calorie requirement is ${(Math.round(final * 100)/100).toFixed(2)} kcal.`;
}