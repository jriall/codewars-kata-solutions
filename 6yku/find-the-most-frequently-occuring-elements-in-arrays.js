// https://www.codewars.com/kata/find-the-most-frequently-occurring-elements-in-arrays/train/javascript

// Input: A 5-day JSON weather forecast which consist of 5 arrays. Each of the 5 arrays includes 8 numbers which represent 3-hourly temperature forecast for a given day.

// Output: An array which includes the most frequent number (temperature) from each of the 5 arrays (days). In case there is a tie, return the value present later in a given array (day).

// Example input:

// var forecast_01 = {
//    "temperature": [
//        [15,17,19,21,21,21,20,16],
//        [16,17,22,22,22,22,20,16],
//        [12,17,19,20,20,20,20,18],
//        [14,15,19,19,20,22,18,17],
//        [15,17,24,24,24,20,20,20]
//    ]
// };

// Example output:

// getMostFrequent(forecast_01) // should return [21,22,20,19,20]

// SOLUTION

function getMaxOccurrence(arr) {
    let store = {};
    let maxCount = 0;
    let maxValue;
    for (let i=0; i<arr.length; i++) {
      let temp = arr[i];
        if (!store.hasOwnProperty(temp)) {
            store[temp] = 0;
        }
        ++store[temp];
        if (store[temp] >= maxCount) {
            maxCount = store[temp];
            maxValue = temp;
        }
    }
    return maxValue;
}

function getMostFrequent(json) {
  let final = [];
  for (let i=0; i<json.temperature.length; i++) {
    final.push(getMaxOccurrence(json.temperature[i]));
  }
  return final;
}
