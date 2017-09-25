// https://www.codewars.com/kata/56562b12044fa538b0000010

// Build a function that will take an array of filenames (as string) and return an array of array. Each array will provide 3 informations about the image file: the full filename, its name and the extension. (See the example below)

// Detect the image files based on the end of the filename which is their format (extension).
// Image files are defined as jpg, gif, png, tiff, svg and bmp. So "puppies.jpg" is a image file while "puppies.html" is not.

// For example:
// Input: ["imgName.extension", "notAnImg"]
// Output: [["imgName.extension", "imgName", "extension"], null]

// So:
// imageFilter(["index.html", "favicon.gif"])
// return [null, ["favicon.gif", "favicon", "gif"]]

// !Non Case Sensitive, so a file with the extension .jpg or .JPG is still an image.

// SOLUTION

function imageFilter(arr) {
  var final = [];
  for (var i=0; i<arr.length; i++) {
    var re = /\w+\.gif$|\w+\.svg$|\w+\.tiff$|\w+\.jpg$|\w+\.png$|\w+\.bmp$/i;
    if (arr[i].match(re)) {
      final.push([arr[i], arr[i].substr(0, arr[i].indexOf(".")), arr[i].substr(arr[i].indexOf(".")+1)]);
    } else {
      final.push(null);
    }
  }
  return final;
}