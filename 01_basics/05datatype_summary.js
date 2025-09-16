// # primitive

// call by value - String, Number, Boolean, null, undefined, Symbol, BigInt



// # non primitive

// call by reference - Array, Objects, functions

let student = ["Anshu" , "Ashu", "Gyan"]

const myObj = {
    name: "ansh",
    age: 22,
}

const myFunction = function (){
    console.log("Hello")
}

myFunction();

console.log(typeof student);