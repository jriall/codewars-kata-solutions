// https://www.codewars.com/kata/extract-the-domain-name-from-a-url-1/train/javascript

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// SOLUTION

function domainName(url) {
  return url.replace(/(https:\/\/|http:\/\/|www.)+/, "").split(".")[0];
}