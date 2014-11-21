/*Adrienne Crawford
 Working Conditionals Industry
 WPF Week 3 Assignment*/

var codeLang = ["JS","HTML","RUBY","PHP","HTML"]
console.log(codeLang);
//array created and returns

// In this example, I want to know how many projects require HTML. So, I create a variable with an if else
// statement that adds 1 for every instance of HTML in the array.

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
