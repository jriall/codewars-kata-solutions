// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// eg:

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

// SOLUTION

function validatePIN (pin) {
  var re = /^\d{4}(\d{2})?$/
  return re.test(pin);
}