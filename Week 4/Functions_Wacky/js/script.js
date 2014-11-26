/*Adrienne Crawford
 Functions Wacky
 WPF Week 4 Assignment
 */

var mshedTater = prompt("Have you ever noticed how people always seems to make an overload of mashed potatoes on Thanksgiving?" +
"How many pounds of potatoes did you buy this year?");
console.log(mshedTater);
//prompted user for variable

var guests = prompt("How many guests will celebrate Thanksgiving with you?");
console.log(guests);
//prompted user for variable

var foodAmount = function (mshedTater, guests){                 //anon funct, defined before invoked.
    var pounds = parseInt(mshedTater) / parseInt(guests);
    return pounds;                                              //returns .34lbs per person with 8lbs and 23 people
}

var a = foodAmount (mshedTater, guests);                       //function invoked at end
    console.log(a);