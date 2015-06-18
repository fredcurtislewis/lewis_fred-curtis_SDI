// Lewis Fred
// SDI Conditionals Worksheet
// 17 June 2015


// variable array
var tirePressure = ["Driver Front", "Passenger Front", "Driver Rear","Passenger Rear"];

// prompts to input the tire pressures for all four tires

tirePressure[0]  = prompt("What is the PSI of your front driver's side tire?");
tirePressure[1]  = prompt("What is the PSI of your front passenger's side tire?");
tirePressure[2]  = prompt("What is the PSI of your rear driver's side tire?");
tirePressure[3]  = prompt("What is the PSI of your rear passenger's side tire?");

// print whether or not the car is safe

if (tirePressure[0] === tirePressure[1]&& tirePressure[2] === tirePressure[3]){
    // tire pressure matches
    console.log("The tires pass spec!")
}else{
    // no bueno
    console.log("Get your tires checked out!!")
}

