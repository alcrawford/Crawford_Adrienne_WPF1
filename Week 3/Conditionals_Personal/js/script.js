/*Adrienne Crawford
 Final Working Conditionals Personal
 WPF Week 3 Assignment*/




//freelance versus corporate
//prompting potential employer for income.checks
var freeLanceOffer = prompt("How much can you pay me as a contractor for a year of freelance work?");
    console.log(freeLanceOffer);

//prompting husband (haha) for advice.checks
var husbSays = prompt("Dear Husband, what is the minimum I can afford to bring home next year?");
    console.log(husbSays);

//created a ternary statement to return results
(freeLanceOffer >= husbSays) ? console.log("I can freelance!") : console.log("This looks corporate.");


//Lets assume that my above return was freelance. I use two different logical operators within an Else If statement below
// to determine if I will need to work at home or if I can afford a nanny.checks.
var nannyCost = 9600;

if(freeLanceOffer >= 50000 && nannyCost <= 7600){                      //logical and operator
   console.log("You can work outside home");
}else if(freeLanceOffer >= 46000 || nannyCost >= 5600){                //logical or operator
   console.log("You can work home part-time");
}else{
   console.log("You are working at home with kids.");                  //no condition on else statement
}

var totalIncome = (freeLanceOffer - nannyCost + 70000);
    console.log(totalIncome);
//created a final variable to determine total income. checks.