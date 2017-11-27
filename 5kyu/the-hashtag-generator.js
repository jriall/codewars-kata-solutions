// https://www.codewars.com/kata/the-hashtag-generator/train/javascript

// The marketing team are spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!

// Here's the deal:

// If the final result is longer than 140 chars it must return false.
// If the input is a empty string it must return false.
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// Example Input to Output:

// " Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"

// " Hello World " => "#HelloWorld"

// SOLUTION

function generateHashtag (str) {
  let hashtagged = `#${str.split(" ").map(a=>a.substr(0,1).toUpperCase()+a.substr(1)).join("")}`;
  return hashtagged.length <= 140 && str ? hashtagged : false;
}