/*Adrienne Crawford
 Functions Industry
 WPF Week 4 Assignment
 */

var reg = prompt("In numbers only, how much do you pay to register your site every year?");
 console.log(reg);
//first user variable prompt to return argument/parameter field

var host = prompt("In numbers only, how much do you pay for yearly hosting?");
 console.log(host);
//second user variable prompt to return argument/parameter field

var addOns = prompt("In numbers only, how much do you pay yearly for add-ons such as Whois Privacy, unlimited bandwidth" +
" and dedicated IP addresses?");
console.log(addOns);

siteCost(reg,host,addOns);                    //set up argument for cost of yearly website maintenance

function siteCost(reg, host, addOns){                                //parameters for yearly website registration and yearly hosting.
  var siteCost = parseInt(reg) + parseInt(host) + parseInt(addOns);  //function definition added together using parsing
  console.log(siteCost);                                             //result check
}





