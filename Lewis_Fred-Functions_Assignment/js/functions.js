/* Lewis, Fred
   SDI Functions Assignment
   June 24 2015
 */

// Variables & Prompts

//var myLottery        = prompt("Enter Florida or Powerball"); // where the user inputs whether they want Florida lottery or Powerball numbers
var floridaNum;

// functions

//function lotteryValidation(lotteryNumbers){   // function attempt



   //if(lotteryNumbers === "Florida"){

function floridaLotto (min, max, num) {

    var lotteryArray     = [];

    for (var f = 0; f < num; f++) {
        var floridaLottery = Math.random() * (max - min) + min;
        lotteryArray [f] = Math.round(floridaLottery);
        //console.log("The Florida numbers are  " + floridaLottery + "!");
    }
    return lotteryArray;




           //}



   //}else{
      // var powerBall        = Math.random() * (42-1)+1;
    //   powerBall            = Math.round(powerBall);
    //   console.log("The numbers are " + powerBall + " and the Powerball is " + "!");

   //}


   //return lotteryNumbers; // the return gives lotteryNumbers back to myLottery

}

// main code

floridaNum           = floridaLotto(1, 53, 6);
console.log("Your Florida Lottery numbers are " + floridaNum + "!");

// myLottery            = lotteryValidation(myLottery);// returning the return to myLottery
// console.log("The lottery numbers are  " + myLottery);  // displays the lottery numbers choosen


//alert("Does it work?"); test to see if my js is working properly