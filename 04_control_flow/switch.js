// switch statement

const month = "march"

switch(month){

case "jan":
console.log("January");
break;

case "feb":
console.log("February");
break;

case "march":
console.log("March");               // without "break" below all case will run except default 
break;                           // output - march, april

case "april":
console.log("April");
break;

default:
    console.log("month not available")
    break;

}