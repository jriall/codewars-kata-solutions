// https://www.codewars.com/kata/56fe9a0c11086cd842000008

// Every uppercase letter is Father, The corresponding lowercase letters is the Son.

// Give you a string ```s```, If the father and son both exist, keep them. If it is a separate existence, delete them. Return the result.

// For example:

// ```sc("Aab")``` should return ```"Aa"```

// ```sc("AabBc")``` should return ```"AabB"```

// ```sc("AaaaAaab")``` should return ```"AaaaAaa"```(father can have a lot of son)

// ```sc("aAAAaAAb")``` should return ```"aAAAaAA"```(son also can have a lot of father ;-)

// SOLUTION

function sc(s){
  var splitten = s.split("");
  var final = [];
  for (var i=0; i<splitten.length; i++) {
    if (splitten[i].toUpperCase() === splitten[i]) {
      if (splitten.indexOf(splitten[i].toLowerCase()) > -1) {
        final.push(splitten[i]);
      }
    } else if (splitten[i].toLowerCase() === splitten[i]) {
      if (splitten.indexOf(splitten[i].toUpperCase()) > -1) {
        final.push(splitten[i]);
      }
    }
  }
  return final.join("");
}