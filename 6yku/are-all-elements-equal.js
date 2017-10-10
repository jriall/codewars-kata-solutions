// https://www.codewars.com/kata/are-all-elements-equal/train/javascript

// Create (a) method(s) eqAll that determines if all elements of a list are equal.
// list can be a String or an Array; return value is a Boolean.
// Your method(s) should not be enumerable. Equality should be strict (===).

// Examples

// "aaaaa".eqAll() => true
// "abcde".eqAll() => false
// [0,0,0].eqAll() => true
// [0,1,2].eqAll() => false

// "".eqAll() => true
// [].eqAll() => true

// SOLUTION

Object.defineProperty( String.prototype, "eqAll", { value: function eqAll() {
  return this.split("").every((a,i,array)=>{
    return a===array[0];
  });
} } );

Object.defineProperty( Array.prototype, "eqAll", { value: function eqAll() {
  return this.every((a,i,array)=>{
    return a===array[0];
  });
} } );