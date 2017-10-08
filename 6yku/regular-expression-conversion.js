// http://www.codewars.com/kata/coding-3min-regular-expression-compression/train/javascript

// Coding 3min : Regular expression compression

// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

// #Task:

// Some people write the regular expression too long, let us compress it.

// Input: ```regex```, a regular expression string

// Output: a compressed regular expression string
// #Example:

// ```"/aaaaaaaaaa/"``` should compress to ```"/a{10}/"```

// ```"/ababababab/"``` should compress to ```"/(ab){5}/"```

// ```"/abcdabcdabcdabcd/"``` should compress to ```"/(abcd){4}/"```

// ```"/aa/"``` should NOT compress to ```"/a{2}/"```

// It should return the original string, because The original string is shorter, it cannot be compressed.

// ```"/abab/"```, ```"/abcdabcd/"```should return the original string too

// ```we love the shortest code ;-)```

// For the sake of simplicity, we only test a single repeat.

// ```/aaaaabbbbb/``` can compress to ```"/a{5}b{5}/"```

// but this kind of situation ```will not appear in the test.```


// SOLUTION

function sc(regex){
  let str = regex.replace(/[/]/g, "");
  let final = "";
  let reps = 0;
  for (let i=1; i<=str.length/2; i++) {
    if (str.substr(0, i).repeat(str.length/i) === str) {
      final = str.substr(0,i);
      reps = str.length/i;
      break;
    }
  }
  if (final.length === 1) {
    final = `/${final}{${reps}}/`;
  } else {
    final = `/(${final}){${reps}}/`;
  }
  return reps===0 ? regex : final.length < regex.length ? final : regex;
}