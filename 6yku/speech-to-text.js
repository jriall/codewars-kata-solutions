// https://www.codewars.com/kata/speech-to-text-string-manipulation/train/javascript

// Siri needs you to code some new features: addition, subtraction and a weather checker. There's no need to implement the speech recognition, that's taken care of...

// Examples: "Add 7 to 15." -> 22 "Subtract 7 from 15." -> 8 "What is the weather at 5:30pm?" -> "sunny"

// According to the weather API, it is "sunny" from (including) 6am to 6pm (including), and "raining" the rest of the day.

// SOLUTION

var bot = {
  message: function(msg) {
    let splitten = msg.split(" ");
    if (splitten[0] === "Add") {
      return Number(splitten[1]) + Number(splitten[3]);
    } else if (splitten[0] === "Subtract") {
      return Number(splitten[3]) - Number(splitten[1]);
    } else if (splitten[0] === "What") {
      let hours = Number(splitten[5].split(":")[0]);
      let afternoon = splitten[5].endsWith("pm?");
      if (afternoon) hours+=12;
      let minutes = Number(splitten[5].split(":")[1].split(":")[0].substr(0,2));
      let time = hours*60+minutes;
      return time < 360 || time > 1080 ? "rainy" : "sunny";
    }
  }
};