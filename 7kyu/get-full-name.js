// https://www.codewars.com/kata/fixme-get-full-name/train/javascript

// The code provided is supposed return a person's Full Name given their first and last names.

// But it's not working properly.

// Notes

// The first and/or last names are never null (None in Python), but may be empty.

// Task

// Fix the bug so we can all go home early.

// SOLUTION

class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return !this.firstName ? this.lastName : !this.lastName ? this.firstName : `${this.firstName} ${this.lastName}`;
  }
}
