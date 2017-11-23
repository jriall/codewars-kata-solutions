// https://www.codewars.com/kata/validate-the-hash/train/javascript

// A file's hash value is essentially a string of numbers and letters of fixed length, that functions as a cryptographic fingerprint for that file.

// File hashes are commonly used in cyber security to identify different strains of malware, with a unique hash value corresponding to each malware file.

// Your junior analyst has just sent you a list of new malware hashes, but you know he has made mistakes entering them. Write a function to validate the array of hash values.

// In this scenario, a valid hash value consists of five numbers and five lowercase letters in any order.

// Return an array of valid hash values, and eliminate any duplicates.

// SOLUTION

function malwareValidate(hashArr) {
  return hashArr.filter(
    (a, i) =>
      a.length === 10 &&
      a.replace(/[^a-z]/g, "").length === 5 &&
      a.replace(/[^0-9]/g, "").length === 5 &&
      hashArr.indexOf(a) == i
  );
}
