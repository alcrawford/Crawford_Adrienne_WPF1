/*Adrienne Crawford
 Functions Personal
 WPF Week 4 Assignment
 */



var bookLength = prompt(" In numbers, tell me if you would prefer to read a 300 or 400 page book.");
 console.log(bookLength);

var pageWrite = prompt("In numbers, tell me how many pages you think a novel writer should complete daily?");
 console.log(pageWrite);

(400 <= bookLength)? console.log ("This may take more than a year to write!") : console.log("I may write this in a year!");

oneYear(bookLength, pageWrite);

function oneYear(pageWrite, bookLength){
 var oneYear = parseInt(pageWrite) * 365;
 var howClose = parseInt(oneYear) - parseInt(bookLength);
 console.log(oneYear);
 console.log(howClose);
}




//if (pageWrite => 5){

}
