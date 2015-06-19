//Lewis Fred
// SDI Conditionals Assignment
// 18 June 2015

// variables

var airlineTicket   = 600;
var hotelRoom       = 100;
var carCost         = 0;
var food            = 400;
var numberTravelers = 3;



//prompts

//var airlineTicket = prompt("Enter the amount your airline ticket cost here");
//var hotelRoom     = prompt("Will you rent a hotel room? Enter true for yes and false for no");
//var rentalCar     =prompt("Will you rent a car? Enter true for yes and false for no");

var hotelRoom         = prompt("Enter the amount you will pay for a hotel room. Enter 0 if you will not need a hotel");
var carCost           = prompt("Enter the price of the rental car. If you do not need one enter 0");

var numberTravelers   = prompt("How many travelers are going total, including yourself?");
var ticketTotal       = numberTravelers *  airlineTicket;
var expensesTotal     = hotelRoom + carCost;
var tripExpense       = ticketTotal + expensesTotal;
var totalTrip         = tripExpense + food;
console.log("Your total cost for Hawaii is " + totalTrip + " " + "!!!!!!");

// Operators (Ternary and logical and if / else)

(carCost > 0) ? console.log("Car rental costs" + " " + carCost + " " + "dollars!!"):console.log("No car rental costs!!!");

if(hotelRoom > 0){
    // enter  amount for hotel for five Days in Hawaii
    console.log("Your total cost for lodging is" + " " + hotelRoom + " " + " dollars!!")
}else{
    console.log("Your total cost for lodging is zero dollars!!")
}



alert("Your total cost to vacation in Hawaii is" + " " + totalTrip  +  " " + "dollars!!!!");