/*Adrienne Crawford
 Expressions Personal
 WPF Week 2 Assignment
 */

alert("I quit smoking. Sometimes I think about all the damage it caused, and the money it cost me.");
//First I prepare reader for purpose. Then check in console. Checks.

prompt("Can you guess how much it cost me to smoke a half of a pack of cigarettes a day for 15 years?");
console.log(prompt);
//Prompt user to interact.

var costSmoke = (15 * 958);
console.log(costSmoke);
//Variable created to calculate cost to smoke a half pack a day for a year (10 * 365) / 20= 182.5 packs at 5.25 a pack
// multiplied by number of smoking years. I would have included the whole math problem, but I didnt know enough.

alert("Actually, over the course of fifteen years, I spent over $"+costSmoke+" on cigarettes. Wow!");
//I created an alert to return the real figure to the user. Checks.

prompt("Can you guess approximately how many cigarettes I smoked in that time?");
//Prompt user to interact.

var numberCigs = (365 * 15 * 10);
console.log(numberCigs);
//Variable to calculate number of cig's smoked over 15 years.

alert("Actually, over the course of fifteen years, PREPARE..., I smoked, "+numberCigs+" cigarettes. Gross.");
//I created an alert to return the real figure to the user. Checks.

alert("Finally, can you guess how many milligrams of tar I inhaled?");
//Prompt user to interact.

var tarMg = (11 * numberCigs);
console.log(tarMg);
//11mg co 11 mgtar 8mg nicotine
