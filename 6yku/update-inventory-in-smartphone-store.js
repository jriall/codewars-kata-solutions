// https://www.codewars.com/kata/update-inventory-in-your-smartphone-store/javascript

// You will be given an array which lists the current inventory of stock in your store. Example:

// var currentInventory = [ [25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple'] ];

// Your will also be given an array which list the new inventory being delivered to your store today. Example:

// var newInventory = [ [5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple'] ];

// Your task is to write a function that when invoked

// updateInventory(currentInventory, newInventory);

// returns the updated list of your current inventory in alphabetical order:

// [[15,'Apple'],[25,'HTC'],[5,'LG'],[1000,'Nokia'],[54,'Samsung'],[43,'Sony']]

// Please note however that the input arrays may not necessarily be passed in alphabetical order.

// SOLUTION

function updateInventory(currentInventory, newInventory) {
  return newInventory.reduce((a,b) => {
    let added = false
    for (let i=0; i<currentInventory.length; i++) {
      if (a[i][1] === b[1]) {
        a[i][0] += b[0];
        added = true
      }
    }
    if (!added) a.push(b)
    return a
  },currentInventory).sort((a,b)=>a[1]-b[1]);
}