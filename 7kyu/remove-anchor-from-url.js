// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples:

// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')

// SOLUTION

function removeUrlAnchor(url){
  return url.replace(/#[A-Za-z0-9]*/gi, "")
}