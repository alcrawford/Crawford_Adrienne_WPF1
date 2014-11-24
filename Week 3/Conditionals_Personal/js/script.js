/*Adrienne Crawford
 Working Conditionals Personal
 WPF Week 3 Assignment*/





var freeLanceOffer = prompt("How much can you pay me as a contractor for a year of freelance work?");
    console.log(freeLanceOffer);

var husbSays = prompt("Dear Husband, what is the minimum I can afford to bring home next year?");
    console.log(husbSays);


(freeLanceOffer >= husbSays) ? console.log("I can freelance!") : console.log("This looks corporate.");


//Lets assume that my above return was freelance. I use two different logical operators within an Else If statement below
// to determine if I will need to work at home or if I can afford a nanny.
var nannyCost = 7900;

if(freeLanceOffer >= 50000 && nannyCost <= 9600){
   console.log("You can work outside home");
}else if(freeLanceOffer >= 46000 || nannyCost >= 5600){
   console.log("You can work home part-time");
}else{
   console.log("You are working at home with kids.");
}



/*start with ternary if i make so much freelance

prompt how much pay for web design jobSalary

prompt how much is the salary

if salary is below but above

freelance soo many jobs.

conditional other than equals*/