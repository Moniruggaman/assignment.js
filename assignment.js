
//This is problem no- 1 (kilometerToMeter)
function kilometerToMeter(kilometer){
   var meter = kilometer * 1000;
    return meter;
}
  var todaysJoging = kilometerToMeter(5);
  var saterdayJoging = kilometerToMeter(7);
  var sundayJoging = kilometerToMeter(6.5);

//This is problem no-2 (budgetCalculator)
var watchPrice = 50;
var quantity = 5;
var priceTotal1 = watchPrice * quantity;
var watchTotalPrice = 250;
//watch total price we found = 250;

var mobilPrice = 100;
var quantity = 7;
var priceTotal2 = mobilPrice * quantity;
var mobilTotalPrice = 700;
//Mobil total price we found = 700;

var laptopPrice = 500;
var quantity = 3;
var priceTotal3 = laptopPrice * quantity;
var laptopTotalPrice = 1500;
//Laptop total price we found = 1500;
//Here we should have total budget for purchasing those products.
function budgetCalculator(sumAll){
    var sum = 0;
    for(var i=0; i<sumAll.length; i++){
    var element = sumAll[i];
    sum = sum + element;
  }
  return sum;
}
var sumAll = [250, 700, 1500];
var subTotal = budgetCalculator(sumAll);

//This problem no-3 (hotelCost).
//Sorry unable to solved the problem. Please help me to solved the problem.
var first10Days = 100;
var second10Days = 80;
var third10Days = 50;
var stayingDays = [6, 13, 43];
function hotelCost(){

}

//This is problem no-4 (megaFriend)

var names = ["salam", "barkat", "rafique", "jobbar", "mukhlesur"];
function megaFriend(names){
  var larger = [0];
  for(var i= 0; i< names.length; i++){
    var element = names[i];
    if(element.length > larger.length) {
      larger = element;
    }
  }
  return larger;
}
var output = megaFriend(names);





