/*Adrienne Crawford
Working Go To Training Week 3
 WPF */

// you can do var fruitBowl = newArray or you can simplify it by making the variable equal to the array from the start like above.

var fruitBowl = ["peach","pear","apple","banana"];
console.log(fruitBowl);
//.......console log will return the number of items in array and list.
//to change an item in the array, use index number to be changed and name new space:

fruitBowl[0] = "pear";
console.log(fruitBowl);

console.log(fruitBowl.length);

//returns two pears now
//fruitBowl.length is an example of dot syntax. this one will check the length or number of figures in array. Helpful in a
//instance when a user was adding values or data and you wanted a count.

//Conditional If Else Example
//In this one, we ask the machine to return a 1 for every pear in the array.
//Start with the correct index number in brackets, remember to use 3 equal signs instead of two for data type recognition.
//also remember to BEGIN conditional with a variable that starts you off correctly pear count starts at zero.

//Check index 0 in array
//check index 1 in array. copy, paste and then amend.
//check index 2 in array
//check index 3 in array

var numPears = 0;

if (fruitBowl[0] === "pear"){

 numPears ++;

}else{
 console.log("this fruit is not a pear!");
}

if (fruitBowl[1] === "pear"){

 numPears ++;

}else{
 console.log("this fruit is not a pear!");
}

if (fruitBowl[2] === "pear"){

 numPears ++;

}else{
 console.log("this fruit is not a pear!");
}

if (fruitBowl[3] === "pear"){

 numPears ++;

}else{
 console.log("this fruit is not a pear!");
}

console.log(numPears);
