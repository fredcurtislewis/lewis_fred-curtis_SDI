// Fred Lewis 10 June 2015 Expressions Assignment

var gardenLength = prompt("How Long is you garden in feet?");
var gardenWidth = prompt("How wide is your garden in feet?");
var acre = 43560;
var gardenAcres = (gardenLength * gardenWidth) / acre;
alert("Your garden plot is" + " " + gardenAcres + " " + "acre(s)");
console.log(gardenAcres);