/* Lewis, Fred
   SDI Functions Assignment
   June 24 2015
 */

// Variables & Prompts

var myLottery        = prompt("Enter Florida or Powerball"); // where the user inputs whether they want Florida lottery or Powerball numbers


// functions

function lotteryValidation(lotteryNumbers){   // function attempt

   if(lotteryNumbers === "Florida"){

       var floridaLottery   =  Math.random();
       console.log("The Florida numbers are  " + floridaLottery + "!");


   }else{
       var powerBall        = Math.random(1-36)
       console.log("The numbers are " + " and the Powerball is " + "!");

   }


   return lotteryNumbers; // the return gives lotteryNumbers back to myLottery

}

// main code


myLottery            = lotteryValidation(myLottery); // returning the return to myLottery
console.log("The lottery numbers are  " + myLottery);  // displays the lottery numbers choosen


//alert("Does it work?"); test to see if my js is working properly