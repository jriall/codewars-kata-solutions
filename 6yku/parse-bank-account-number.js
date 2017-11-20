// https://www.codewars.com/kata/parse-bank-account-number/train/javascript

// Returns the bank account number parsed from specified string.

//  You work for a bank, which has recently purchased an ingenious machine to assist in reading letters and faxes sent in by branch offices.
//  The machine scans the paper documents, and produces a string with a bank account that looks like this:

//     _  _     _  _  _  _  _
//   | _| _||_||_ |_   ||_||_|
//   ||_  _|  | _||_|  ||_| _|
//  Each string contains an account number written using pipes and underscores.
//  Each account number should have 9 digits, all of which should be in the range 0-9.

//  Your task is to write a function that can take bank account string and parse it into actual account numbers.

//  @param {string} bankAccount
//  @return {number}
// Examples:


//    '    _  _     _  _  _  _  _ \n'+
//    '  | _| _||_||_ |_   ||_||_|\n'+     =>  123456789
//    '  ||_  _|  | _||_|  ||_| _|\n'

//    ' _  _  _  _  _  _  _  _  _ \n'+
//    '| | _| _|| ||_ |_   ||_||_|\n'+     => 23056789
//    '|_||_  _||_| _||_|  ||_| _|\n',

//    ' _  _  _  _  _  _  _  _  _ \n'+
//    '|_| _| _||_||_ |_ |_||_||_|\n'+     => 823856989
//    '|_||_  _||_| _||_| _||_| _|\n',

// SOLUTION

function parseBankAccount(bankAccount) {
  let rows = bankAccount.split("\n");
  let numbers = [];
  for (let i=0; i<rows[0].length; i+=3) {
    let temp = "";
    for (let j=0; j<3; j++) {
      temp+=rows[j].slice(i,i+3);
    }
    numbers.push(temp);
  }
  return Number(numbers.map(a=>{
    switch(a) {
      case '     |  |':
        return 1;
      case ' _  _||_ ':
        return 2;
      case ' _  _| _|':
        return 3;
      case '   |_|  |':
        return 4;
      case ' _ |_  _|':
        return 5;
      case ' _ |_ |_|':
        return 6;
      case ' _   |  |':
        return 7;
      case ' _ |_||_|':
        return 8;
      case ' _ |_| _|':
        return 9;
      default:
        return 0;
    }
  }).join(""));
}