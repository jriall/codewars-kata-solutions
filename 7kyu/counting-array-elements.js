//https://www.codewars.com/kata/counting-array-elements/train/javascript

//Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john'])
// #=> { 'james': 2, 'john': 1}

// SOLUTION

function count(array){
  let uniques = {a:0};
  let test = true;
  for (let i=0; i<array.length; i++) {
    let props = array[i];
    if (!uniques.hasOwnProperty(props)) {
      uniques[props] = 1;
    } else {
      uniques[props]++;
    }
  }
  return uniques;
}