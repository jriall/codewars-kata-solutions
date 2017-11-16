// https://www.codewars.com/kata/whens-the-next-train-to-brighton/train/javascript

// Write a function that tells you when is the next train to Brighton you can take, given the time of day and the minutes it takes you to get to the station.

// There is one train every half an hour from 05:00 to 23:30.

// The current time is represented by a string in the format "hh:mm". The minutes you need to arrive at the station are also represented by a string.

// The result is a string that says "The next train is at hh:mm" (see examples below).

// If it's too late for the last train of the day (e.g. it's 23:50 and you need 40 minutes to get to the station), the function returns "The next train is at 05:00.".

// EXAMPLES

// nextTrain("17:40", "30") => "The next train is at 18:30."
// nextTrain("23:20", "25") => "The next train is at 05:00."
// nextTrain("03:36", "95") => "The next train is at 05:30."

// SOLUTION

function nextTrain(time, minutes){
  let split = time.split(":");
  let totalMinutes = Number(split[0]) * 60 + Number(split[1]) + Number(minutes);
  if (totalMinutes > 1410 || totalMinutes < 300) {
    return "The next train is at 05:00.";
  } else {
    let nextTrain = Math.ceil((totalMinutes * 2) / 60) / 2;
    return `The next train is at ${Math.floor(nextTrain) < 10 ? "0" : ""}${Math.floor(nextTrain)}:${Math.floor(nextTrain) === nextTrain ? "00" : "30"}.`;
  }
}