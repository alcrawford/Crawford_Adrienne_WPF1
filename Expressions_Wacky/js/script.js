/*Adrienne Crawford
Expressions Wacky
WPF Week 2 Assignment
 */


alert("Welcome to silly trivia quiz! I am going to ask you some odd questions and you can take a good guess!");
//Alerting user to purpose.Checks

var hoursLight = prompt("How many hours do you think the average person spends, in their lifetime, waiting for the light to turn from red to green?");
console.log(hoursLight);
//variable to find out users guess.

var hoursLoff = (336 - hoursLight);
console.log(hoursLoff);
//Variable to find out how far off the user is so it can be returned.

alert("Well, you are off by about "+hoursLoff+" hours. The answer is 336 hours, or approximately 2 weeks.");
//Return the result to user.checks

var hoursTvad = prompt("How many hours do you think the average person spends, in their lifetime, watching commercials?");
console.log(hoursTvad);
//Variable to find out users guess.

var hoursToff = (13149 - hoursTvad);
console.log(hoursToff);
//Variable to find out how far off the user is so it can be returned.

alert("This time you are off by about "+hoursToff+" hours. The real answer is 13,149 or about 1 and 1/2 years!");
//Return to the user. Checks



