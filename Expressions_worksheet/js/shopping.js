// Fred Lewis June 10 2015 Expressions: Average Shopping Bill

var weekOne = 50; // total for groceries in week 1
var weekTwo = 55; // total for groceries in week 2
var weekThree = 60; // total for groceries in week 3
var weekFour = 50; // total for groceries in week 4
var weekFive= 60; // total for groceries in week 5

var weeklyGroceries = [weekOne, weekTwo, weekThree, weekFour, weekFive]; // This is my array from the variables above
var averageWeekly= (weekOne + weekTwo + weekThree + weekFour + weekFive) / 5; // the average for the five weeks of groceries
var totalSpent= weekOne + weekTwo + weekThree + weekFour + weekFive; // the total amount spent on groceries over five weeks

console.log("You have spent a total of" + " " + "$" + totalSpent + " " + "on groceries over five weeks. This is an average of" + " " + "$" + averageWeekly + " " + "a week.");