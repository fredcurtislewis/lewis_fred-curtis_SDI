/* Lewis, Fred
   SDI Functions Assignment
   June 24 2015
 */

// Variables & Prompts

var myLottery        = prompt("Enter Florida or Powerball"); // where the user inputs whether they want Florida lottery or Powerball numbers
var floridaNum;
var powerBall;
var thePowerBall

// functions


if (myLottery === "Florida") {

    function floridaLotto(min, max, num) {
        var lotteryArray = [];

        for (var f = 0; f < num; f++) {
            var floridaLottery = Math.random() * (max - min) + min;
            lotteryArray [f] = Math.round(floridaLottery);
            //console.log("The Florida numbers are  " + floridaLottery + "!");
        }
        return lotteryArray;
    }
}else{

    function powerBallNum(min, max, num) {
        var lotteryArray = [];

        for (var f = 0; f < num; f++) {
            var floridaLottery = Math.random() * (max - min) + min;
            lotteryArray [f] = Math.round(floridaLottery);
            //console.log("The Florida numbers are  " + floridaLottery + "!");
        }
        return lotteryArray;
    }
    function thePowerBallNum(min, max, num) {
        var powerArray = [];

        for (var p = 0; p < num; p++) {
            var powerBallLottery = Math.random() * (max - min) + min;
            powerArray [p] = Math.round(powerBallLottery);
            //console.log("The Florida numbers are  " + floridaLottery + "!");
        }
        return powerArray;
    }


}

// main code

if(myLottery === "Florida") {
    floridaNum = floridaLotto(1, 53, 6);
    console.log("Your Florida Lottery numbers are " + floridaNum + "!");
}else{
    powerBall            = powerBallNum(1, 59, 5);
    thePowerBall         = thePowerBallNum(1, 35, 1);
    console.log("Your numbers are "+ powerBall + " and your power ball is " + thePowerBall + "!");
}



//alert("Does it work?"); test to see if my js is working properly