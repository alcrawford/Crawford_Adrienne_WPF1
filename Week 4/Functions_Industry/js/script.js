/*Adrienne Crawford
 Functions Industry
 WPF Week 4 Assignment
 */

var Reg = prompt("In numbers only, how much do you pay to register your site every year?");
 console.log(Reg);
//first user variable prompt to return argument/parameter field
var host = prompt("In numbers only, how much do you pay for yearly hosting?");
 console.log(host);
//second user variable prompt to return argument/parameter field

siteCost(Reg,host);                    //set up argument for cost of yearly website maintenance


function siteCost(Reg, host){                           //parameters for yearly website registration and yearly hosting
  var siteCost = parseInt(Reg) + parseInt(host);        //function definition added together using parsing
  console.log(siteCost);                                //result check
}



