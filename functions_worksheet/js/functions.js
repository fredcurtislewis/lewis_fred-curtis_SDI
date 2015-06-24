/*  Lewis, Fred
    SDI Functions worksheet
    23 June 2015
 */

// Variables & Prompts

var pi              = 3.14;   // the value of pi
var myRadius        = prompt("What is the radius of the circle?"); // where the user inputs radius


// functions

function circValidation(circumference){   // function attempt

    circumference   = 2 * pi * myRadius; // the formula for circumference from a known radius
    console.log("The circumference of your circle is  " + circumference + "!");

    return circumference; // the return gives circumference back to myCircumference

}

// main code


myRadius            = circValidation(myRadius); // returning the return to myCircumference
console.log("The circumference of the cirlce is  " + myRadius);  // displays the radius of the cirlce on the console.


// alert("Works!!!");