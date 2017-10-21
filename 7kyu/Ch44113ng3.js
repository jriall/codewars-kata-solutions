// https://www.codewars.com/kata/ch4113ng3/javascript

// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

// SOLUTION

function nerdify(txt) {
  return txt.replace(/a/gi, '4').replace(/e/gi, '3').replace(/l/g, '1');
}
