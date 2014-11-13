/*Adrienne Crawford
Expressions Wacky
WPF Week 2 Assignment
 */


alert("Welcome to silly trivia quiz! I am going to ask you some odd questions and you can take a good guess!");
//Alerting user to purpose.

var hoursLight = prompt("How many hours do you think the average person spends, in their lifetime, waiting for the light to turn from red to green?");
console.log(hoursLight);
//variable to find out users guess.

var hoursOff = (336 - hoursLight);
console.log(hoursOff);
//Variable to find out how far off the user is so it can be returned.

alert("Well, you are off by about "+hoursOff+" hours. The answer is 336 hours, or approximately 2 weeks.");
//Return the result to user



