/*Adrienne Crawford
 Functions Personal
 WPF Week 4 Assignment
 */



var bookLength = prompt(" In numbers, tell me if you would prefer to read a 300 or 400 page book.");
 console.log(bookLength);
//prompt to get variable.

var pageWrite = prompt("In numbers, tell me how many pages you think a novel writer should complete daily? " +
"Keep in mind that most writers will go through at least one draft, doubling the page size in writing.");
 console.log(pageWrite);
//prompt to get variable

(400 <= bookLength)? console.log ("This may take more than a year to write!") : console.log("I may write this in a year!");
//ternary

oneYear(pageWrite, bookLength);         //argument

function oneYear(pageWrite, bookLength){                 //parameters
 var oneYear = parseInt(pageWrite) * 730;                //first parsed variable considers a two-year length because of average draft writing
 var howClose = parseInt(bookLength) - (oneYear);        //second variable considers how far off the users estimate is from book size
 console.log(oneYear);                                   //two console logs to check both
 console.log(howClose);
}



if(pageWrite >= 5 && bookLength <= 300){                      //logical and operator
 console.log("You can buy lots of clothes.");
}else if(pageWrite >= 2 || bookLength >= 300){                //logical or operator
 console.log("You may not buy much.");
}else{
 console.log("You may want to do something. Fast.");                  //no condition on else statement
}


