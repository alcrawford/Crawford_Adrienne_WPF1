/*Adrienne Crawford
 Working Conditionals Industry
 WPF Week 3 Assignment*/

var codeLang = ["JS","HTML","RUBY","PHP","HTML"]
console.log(codeLang);
//array created and returns

// In this example, I am pretending as if I am a supervisor trying to collect data on a web development job. I want to know how many projects
// require HTML. So, I create a variable with if else statements that add 1 for every instance of HTML in the array.

var numHtml = 0;

if (codeLang[0] === "HTML"){
  numHtml ++;
}else{
 console.log("this code is not HTML.");
}
if (codeLang[1] === "HTML"){
 numHtml ++;
}else{
 console.log("this code is not HTML.");
}
if (codeLang[2] === "HTML"){
 numHtml ++;
}else{
 console.log("this code is not HTML.");
}
if (codeLang[3] === "HTML"){
 numHtml ++;
}else{
 console.log("this code is not HTML.");
}
if (codeLang[4] === "HTML"){
 numHtml ++;
}else{
 console.log("this code is not HTML.");
}

console.log(numHtml);
//the final return gives the correct number.

//Next, I prompt the user(employee) for the number of developers needed for each job.
var workersHtml = prompt("I am going to budget the HTML Project based on a few criteria." +
"How many developers do you need to complete each HTML project?");
console.log(workersHtml);
//returns
//Next I prompt for the time required to complete the job.

var hoursHtml = prompt("With a full team, how many hours will the project require for completion?");

var totalOne = workersHtml * hoursHtml;
var totalHours = 4800 / totalOne;
//I made two variables to calculate the amount for payroll using a 4800 budget.
alert("You are budgeted for an hourly wage of " +totalHours+ " dollars per employee.");
//I returned the payroll amount