// https://www.codewars.com/kata/one-down/train/javascript

// A very passive-aggressive co-worker of yours was just fired. While he was gathering his things, he quickly inserted a bug into your system which renamed everything to what looks like jibberish. He left two notes on his desk, one reads: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" while the other reads: "Uif usjdl up uijt lbub jt tjnqmf kvtu sfqmbdf fwfsz mfuufs xjui uif mfuufs uibu dpnft cfgpsf ju".

// Rather than spending hours trying to find the bug itself, you decide to try and decode it.

// If the input is not a string, your function must return "Input is not a string". Your function must be able to handle capital and lower case letters. You will not need to worry about punctuation.

// SOLUTION

const oneDown = (str) => {
  if (typeof str !== "string") {
    return "Input is not a string";
  }
  return str.split("").map(a=>{
     if ((a[0].charCodeAt(0) > 65 && a[0].charCodeAt(0) < 91) || (a[0].charCodeAt(0) > 97 && a[0].charCodeAt(0) < 123)) {
      return String.fromCharCode(a[0].charCodeAt(0) - 1);
    } else if (a[0].charCodeAt(0) === 97) {
      return "Z";
    } else if (a[0].charCodeAt(0) === 65) {
      return "z";
    } else {
      return a;
    }
  }).join("");
};