// Lewis Fred
// SDI Conditionals Worksheet
// 17 June 2015

// variables
var percentGrade = 90;







//prompts
var percentGrade = prompt("What is your average in the class from 0 to 100?");

if(percentGrade >= 90 && percentGrade <= 100){

    // this will be used to determine the letter grade
    console.log("You have a" +" " + percentGrade +" " + "%, which means you have earned a A in this class");
}
if(percentGrade >= 80 && percentGrade <= 89){
    // a grade of 80-90 = a B
    console.log("You have a" +" " + percentGrade +" " + "%, which means you have earned a B in this class");
}

if(percentGrade >= 73 && percentGrade <= 79){
    // a grade of 80-90 = a B
    console.log("You have a" +" " + percentGrade +" " + "%, which means you have earned a C in this class");
}
if(percentGrade >= 70 && percentGrade <= 72){
    // a grade of 80-90 = a B
    console.log("You have a" +" " + percentGrade +" " + "%, which means you have earned a D in this class");
}
if(percentGrade >= 0 && percentGrade <= 69){
    // a grade of 80-90 = a B
    console.log("You have a" +" " + percentGrade +" " + "%, which means you have earned a F in this class");
}

