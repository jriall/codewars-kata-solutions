// https://www.codewars.com/kata/decimals-or-groups-of-thousands/javascript

// Countries such as the U.S. and China use a dot to represent a decimal point, they also use a comma to seperate groups of thousands e.g. 4,353.56

// Other countries (mostly in Europe) instead use a comma to represent a decimal point, they also use a dot to seperate groups of thousands e.g. 4.353,56

// Your task is to sum up an array of string repensentation of numbers being in one of the two formats mentioned above with AT MOST two decimal places. The resulted sum should be a string with the format of xx,xxx.xx (keep two decimal places, seperate groups of thousands with comma if necessary)

// This Kata is inspired by one of the bugs that almost happened due to the differences in number formatting ( •̀ω•́ )σ

// SOLUTION

function sumUpNumbers(arr) {
  let re1 = new RegExp(/[.,](?=\d{2}$)|[.,](?=\d$)/, "g");
  let re2 = new RegExp(/[.,](?=\d{3})/, "g");
  let final = arr.reduce((a,b)=>a+parseFloat(b.replace(re1, ".").replace(re2, "")),0).toLocaleString();
  return final.split(".").length === 1 ? final + ".00" : final.split(".")[1].length === 1 ? final + "0" : final;
}