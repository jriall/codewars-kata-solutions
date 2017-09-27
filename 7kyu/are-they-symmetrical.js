// https://www.codewars.com/kata/5705cc3161944b10fd0004ba

// Give you an ```obj```, it can be 3 types: string, number and number array, Check that they are symmetrical or not, return a boolean value.

// SOLUTION

function sc(obj) {
  if (typeof obj == 'object') {
    return obj.join('') == obj.reverse().join('');
  } else if (typeof obj == 'string') {
    return obj == obj.split('').reverse().join('');
  } else if (typeof obj == 'number') {
    return obj == obj.toString().split('').reverse().join('');
  }
}