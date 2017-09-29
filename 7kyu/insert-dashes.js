// https: //www.codewars.com/kata/55960bbb182094bc4800007b

// Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

// SOLUTION

function insertDash(num) {
    let final = "";
    let splitNumber = (num.toString()).split("").map(a => Number(a));
    for (let i = 0; i < splitNumber.length; i++) {
        final += splitNumber[i];
        if (splitNumber[i] % 2 === 1 && splitNumber[i + 1] % 2 === 1) {
            final += "-";
        }
    }
    return final;
}