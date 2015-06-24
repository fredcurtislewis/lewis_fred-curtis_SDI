/* Lewis Fred
  SDI Functions worksheet
  23 June 2015
  */
// variables and prompts

var deadlyStings = 8.666666667;
var myWeight     = prompt("Please enter your weight in pounds:");
var myDeath      = deadlyStings * myWeight; // the formula for amount of bee stings it takes to kill you.

// functions

function stingValidation(stings){   // function attempt


    console.log("The number of bee stings it takes to kill you is;   " + stings);

    var timesClicked = 1; // counting the number of times clicked

    while (stings === ""){  // if the user does not input data

        stings = prompt("Please do not leave this blank or we cannot calculate how many stings will kill you!!"); // prompt displayed if nothing is input ( not working correctly

        timesClicked++; // adds one to every click with no data

        if (timesClicked === 5){ // a max of five clicks before it stops

        }

    }

    return stings; // the return gives stings back to myDeath


}

// main code
myDeath = stingValidation(myDeath); // returning the return to myDeath


console.log("The number of stings it takes to kill you is  " + myDeath);  // displays the radius of the cirlce on the console.


// alert("Works!!!");
