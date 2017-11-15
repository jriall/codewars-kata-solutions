//Idea
Draw a canvas which displays an x to the user as below:

x___x
_x_x_
__x__
_x_x_
x___x


//Name



//Description




//Initial Solution
function drawingX(n) {
  if (n<1) return "Number must be positive!";
  let final = [];
  for (let i=0; i<n; i++) {
    let temp = "_".repeat(n);
    temp.substr(0,i) + "x" + temp.substr(i+1);
    console.log(temp);
    final.push(temp);
  }
  return final;
}

drawingX(5);


//Test Cases