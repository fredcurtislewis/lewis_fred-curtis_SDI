// Lewis Fred
// SDI 17 June 2015
// Conditionals Worksheet

// variables from worksheet required fo problem
var gasEfficiency = 40;
var percentInTank= 40;
var tankCapacity = 10;

// Prompts
var percentInTank = prompt("What percent full is your gas tank? no special characters ");
var gasEfficiency = prompt("How many miles to the gallon does your car get?");
var tankCapacity = prompt("How many gallons of gas does your vehicle hold?");


// if the car has half a tank, it can make it
if(percentInTank >= 50 ){
    //code performed if condition is true
    console.log ("You can make it through the desert");

}else{
    // code performed if condition is false
    console.log("You only have" +" "+ percentInTank / tankCapacity + " " + "gallons of gas in your tank, better get gas now while you can!");
}
