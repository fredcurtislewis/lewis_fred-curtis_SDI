/*  Lewis, Fred
    SDI Functions worksheet
    23 June 2015
 */

// Variables & Prompts

var pi              = 3.14;   // the value of pi
var myRadius        = prompt("What is the radius of the circle?"); // where the user inputs radius
var myCircumference = 2 * pi * myRadius; // the formula for circumference from a known radius

// functions

function circValidation(circumference){   // function attempt

    // console.log("Your circumference is  " + circumference);

    var timesClicked = 1; // counting the number of times clicked

    while (circumference === ""){  // if the user does not input data

        circumference = prompt("Please do not leave this blank or we cannot calculate your circumference!!"); // prompt displayed if nothing is input ( not working correctly

        timesClicked++; // adds one to every click with no data

        if (timesClicked === 5){ // a max of five clicks before it stops

        }

    }

    return circumference; // the return gives circumference back to myCircumference


}

// main code
myCircumference = circValidation(myCircumference); // returning the return to myCircumference


console.log("The circumference of the cirlce is  " + myCircumference);  // displays the radius of the cirlce on the console.


// alert("Works!!!");