/*Adrienne Crawford
 Working Conditionals Wacky
 WPF Week 3 Assignment*/

//setting up variable and prompt to get user input. checks.
var temp =prompt("The meteorologist is notoriously wrong. So why don't you help me decide what the weather will be like today!" +
"What do you think the temperature will be today?");
  console.log(temp);

//set up a series of else if statements to decide what to do based on the users input.

if(temp <= 30){
   console.log("We will watch movies today!");
}else if(temp > 31 && temp < 40){                             //use logical and operators throughout
   console.log("We will go to a movie today!");
}else if(temp > 41 && temp < 50){                             // and operator
    console.log("We will go to the market today!");
}else if(temp > 50 && temp < 60){                             // and operator
    console.log("We will go to the park today!");
}else{
    console.log("Looks like a record breaker to me.");       //returns.
}

//setting up prompt to return difference to user
var actualTemp = prompt("What was the actual temperature today?");
console.log(actualTemp);

var goodGuess = (temp - actualTemp);               //isnt there a difference operator? so I don't get a negative sign?

prompt("You may be better than those guys on TV. You were off by about "+goodGuess+" degrees.");
