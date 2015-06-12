// Fred Lewis 10 June 2015 Expressions Assignment

var gardenLength = prompt("How Long is you garden in feet?"); // User inputs how long their garden is here
var gardenWidth = prompt("How wide is your garden in feet?"); // User inputs how wide their garden is here
var acre = 43560; // one acre is equal to 43560 square feet
var gardenAcres = (gardenLength * gardenWidth) / acre; // multiplying the length by the width gives you the square feet, dividing it by one acre tells you the size of you plot in acres
alert("Your garden plot is" + " " + gardenAcres + " " + "acre(s)"); // displays the answer to the size of the garden
console.log(gardenAcres); // prints to console
