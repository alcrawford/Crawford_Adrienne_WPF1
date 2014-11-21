/*Adrienne Crawford
 Working Conditionals Industry
 WPF Week 3 Assignment*/

var codeLang = ["JS","HTML","RUBY","PHP","HTML"]
console.log(codeLang);
//array created and returns

// In this example, I want to know how many developers are using HTML. So, I create a variable with an if else
// statement that adds one for every instance of HTML in the array.

var numHtml = 0;

if (codeLang[0] === "HTML"){
  numHtml ++;
}else{
 console.log("this code is not HTML.");
}


