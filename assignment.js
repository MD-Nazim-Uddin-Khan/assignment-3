



function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
   
}
var result = kilometerToMeter(15);
console.log("result", result);
var count = kilometerToMeter(8);
console.log("result", count);



function budgetCalculator (mobile, watch, laptop){
    var calculator = mobile*5 + watch*7 + laptop*10 ;
    return calculator;
}
var result = budgetCalculator(50, 70, 100 );
console.log(result);



function hotelCost(day) {
    var money = 0;
    if (day <= 10 ) {
        money = day * 100 ;
    }
    else if (day <= 20) {
        var firstSeason = 10 * 100;
        var remaining = day - 10;
        var secondSeason = remaining * 80;
        money = firstSeason + secondSeason;
    }
    else {
        var firstSeason = 10 * 100;
        var secondSeason = 10 * 80;
        var remaining = day - 20;
        var thirdSeason = remaining * 60;
        money = firstSeason + secondSeason + thirdSeason;
    }
    return money;
}
var result = hotelCost(25);
console.log(result);




var megaFriend =['Jamal', 'Kamal', 'Rahim', 'Karim']
    var pet = megaFriend.slice(2, 3);
    console.log(pet);





