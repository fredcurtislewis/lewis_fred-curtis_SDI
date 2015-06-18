//Lewis Fred
// SDI Conditionals Assignment
// 18 June 2015

//Moving costs calculator to move to Hawaii from Seattle Washington
//variables shipping a car, family members in family times cost of airfare, shipping of household goods or selling all your stuff and bringing just a suitcase,first months rent and deposit on a new place, deposit on electric and water

var shippingVehicle  = true;
var shippingCost     = 1500;
var numberInFamily   = 4;
var airfare          = 600;
var totalAirfare     = 0;
var shippingHouse    = false;
var houseCost        = 0;
var rentDeposit      = 4000;
var electricWater    = 300;
var total            = houseCost + shippingCost + totalAirfare + rentDeposit + electricWater;
//prompts to gain information for my calculator

var shippingVehicle   = prompt("I will be shipping a vehicle? True or False");
if(shippingVehicle = true){
    //if the user selects true 1500 will be added to total
    var shippingCost  = 1500
    console.log("Your total vehicle cost is" + " " + shippingCost + " " + "!!!");
    
}


// if or else
