// Fred Lewis June 10 2015 Expressions: Discounts

var originalPrice = 100; // The original price of the shoes was $100
var discountPer = 10; // The discount price was 10%
var salesTax = .05; // There is a 5% sales tax
var discountAmount = originalPrice * 0.1 ;
var discountPrice = originalPrice - discountAmount;
var taxedItem = (discountPrice * salesTax) + discountPrice; // The taxed price of the shoes
var itemDescription = "Climbing Shoes";
console.log("Your" + " " + itemDescription + " " + "were originally" + " " + "$" + originalPrice + " " + " but after a"
    + " " + discountPer + "%" + " " + "discount, it is now" + " " + "$" + discountPrice + " " + "without tax and" + " " + "$" +
    taxedItem + "0" + " " + "with tax.");
