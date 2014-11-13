/*Adrienne Crawford
 Expressions Personal
 WPF Week 2 Assignment
 */

alert("I quit smoking. Sometimes I think about all the damage it caused, and the money it cost me.");
//First I prepare reader for purpose. Then check in console. Checks.

var costGuess = prompt("Can you guess how much it cost me to smoke a half of a pack of cigarettes a day for 15 years?");
console.log(costGuess);
//Created a variable to get user input

var costSmoke = (15 * 958);
console.log(costSmoke);
//Variable created to calculate cost to smoke a half pack a day for a year (10 * 365) / 20= 182.5 packs at 5.25 a pack
// multiplied by number of smoking years. I would have included the whole math problem, but I didn't know enough.

var costDiff = (costSmoke - costGuess);
console.log(costDiff);
//I created a second variable to show the user how close their guess was.

alert("Actually, over the course of fifteen years, I spent over $"+costSmoke+" on cigarettes.You were off by about $"+costDiff+". Wow!");
//I created an alert to return the real figure to the user. Checks.

var cigGuess = prompt("Can you guess approximately how many cigarettes I smoked in that time?");
console.log(cigGuess);
//Created a variable to get user input.

var numberCigs = (365 * 15 * 10);
console.log(numberCigs);
//Variable to calculate number of cig's smoked over 15 years.

var cigDiff = (numberCigs - cigGuess);
console.log(cigDiff);
//I created a second variable to show the user how close their guess was.

alert("Actually, over the course of fifteen years, PREPARE..., I smoked, "+numberCigs+" cigarettes. You were" +
" off by "+cigDiff+". Gross, huh?");
//I created an alert to return the real figure to the user. Checks.

var tarGuess = prompt("Finally, can you guess how many milligrams of tar I inhaled?");
console.log(tarGuess);
//Created variable to get user input.

var tarMg = (11 * numberCigs);
console.log(tarMg);
//Variable to calculate total mg of tar if average cig has 11 mg.

var tarDiff = (tarMg - tarGuess);
console.log(tarDiff);
//I created a second variable to show the user how close their guess was.

alert("You were off by "+tarDiff+"mg. Over the course of fifteen years, I inhaled over "+tarMg+" milligrams of tar. That's equivalent to over 21 ounces " +
"or 1.2 lbs of tar. Now, I have a really good reminder not to smoke EVER again.");
//Final return.