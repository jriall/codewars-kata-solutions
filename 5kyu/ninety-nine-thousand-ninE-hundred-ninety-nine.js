// https://www.codewars.com/kata/ninety-nine-thousand-nine-hundred-ninety-nine/javascript

// Write a method that takes a number and returns a string of that number in English. For example

// numberToEnglish(27) // => 'twenty seven'
// Your method should be able to handle any number between 0 and 99999. If given numbers outside of that range or non-Integer numbers, the method should return an empty string.

// SOLUTION

const numberToEnglish = n => {
  let numbers = {"0": "", "1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine", "10": "ten", "11": "eleven", "12": "twelve", "13": "thirteen", "14": "fourteen", "15": "fifteen", "16": "sixteen", "17": "seventeen", "18": "eighteen", "19": "nineteen", "20": "twenty", "30": "thirty", "40": "forty", "50": "fifty", "60": "sixty", "70": "seventy", "80": "eighty", "90": "ninety"};
  let final = [];
  let stringified = n.toString();
  if (n===0) return "zero";
  if (stringified.length === 5) {
    if (Number(stringified.substr(0,2)) < 20) {
      final.push(numbers[stringified.substr(0,2)]);
      final.push("thousand");
      stringified = stringified.substr(2);
    } else {
      final.push(numbers[stringified.substr(0,1)+"0"]);
      stringified = stringified.substr(1);
    }
  }
  if (stringified.length === 4) {
    final.push(numbers[stringified[0]]);
    final.push("thousand");
    stringified = stringified.substr(1);
  }
  console.log(stringified)
  if (stringified.length === 3) {
    if (stringified[0]!=="0") {
      final.push(numbers[stringified[0]])
      final.push("hundred");
    }
    stringified = stringified.substr(1);
  }
  if (stringified.length === 2) {
    if (Number(stringified.substr(0,2)) < 10) {
      final.push(numbers[stringified.substr(1,1)]);
      stringified = "";
    } else if (Number(stringified.substr(0,2)) < 20) {
      final.push(numbers[stringified.substr(0,2)]);
    } else {
      final.push(numbers[stringified.substr(0,1)+"0"]);
      stringified = stringified.substr(1);
    }
  }
  if (stringified.length === 1) {
    final.push(numbers[stringified]);
  }
  return final.filter(a=>a!=="").join(" ");
};