/*Adrienne Crawford
 Expressions Industry
 WPF Week 2 Assignment
 */

alert("I want to know how much you made last year as a Web Developer?");
//First I alert the reader to my purpose. Check in browser window. Checks.

var freeLance = prompt ("In numbers only, tell me how many dollars you earned last year doing freelance work.");
//I set up the first variable return.
console.log(freeLance);
//console log returns

var jobSalary = prompt ("In numbers only, tell me how many dollars you earned last year from salary.");
//I set up the second variable return.
console. log(jobSalary);
//console log returns

var incomeTax = prompt ("In numbers only, tell me how many dollars you payed in income tax last year.");
//I set up the last variable return.
console. log(incomeTax);
//console log returns

var yearSum = Number(freeLance) + Number(jobSalary);
//I created a variable to add the figures with concantonation
console. log(yearSum);
//console log returns

var yearIncome = (yearSum - incomeTax);
//I created a variable to subtract the income tax and give us a final figure
console.log(yearIncome);
//console log returns

alert("Last year, you made approximately $"+yearIncome+" as a Web Developer. Thank you for helping.");
//I created an alert to return the figure to the user. Checks.
