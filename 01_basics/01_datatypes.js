"use strict"            // treat all js code as newer version

// alert(3 +3);         we are using nodejs, not the browser

console.log( 3+3);

let name = "Anshu"
let age = 21
let isLogged = true;
let temp = null;

// type of datatypes 
// number => 2 to the power 53
// bigint 
// string = "yes"
// boolean = true/false 
// undefined => no value assinged
// null => standalone value
// Symbol => primitive datatype     It is immutable. Each symbol has different value

let sym = Symbol("New code")
let newSym = Symbol("new code")

console.log(sym.description);
console.log(typeof sym)
console.log(sym===newSym)

// object

console.log(typeof null)         // object
console.log(typeof undefined)    // undefined



