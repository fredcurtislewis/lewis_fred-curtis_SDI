/* Lewis Fred
  SDI Functions worksheet
  23 June 2015
  */
// variables and prompts

var deadlyStings = 8.666666667;
var myWeight     = prompt("Please enter your weight in pounds:");



// functions

function stingValidation(stings){   // function attempt

    stings      = deadlyStings * myWeight; // the formula for amount of bee stings it takes to kill you.
    console.log("The number of bee stings it takes to kill you is;   " + stings); // prints to verify the function is working properly

    return stings; // the return gives stings back to myWeight


}

// main code
myWeight = stingValidation(myWeight); // returning the return to myWeight


console.log("The number of stings it takes to kill you is  " + myWeight);  // displays the number of bee stings it takes to kill you on the console.


// alert("Works!!!"); test alert
