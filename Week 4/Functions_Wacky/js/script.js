/*Adrienne Crawford
 Functions Wacky
 WPF Week 4 Assignment
 */

//thanksgiving food amount per person like 8 lbs potatoes /12 people


var calcAmount = function(weight, population){
    var lbs = population / weight;
    return lbs;
}

var a = calcAmount(8, 10);
console.log(calcAmount);