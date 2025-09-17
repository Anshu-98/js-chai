// # Primitive

// call by value - String, Number, Boolean, null, undefined, Symbol, BigInt


// # Non Primitive

// call by reference - Array, Objects, functions

let student = ["Anshu" , "Ashu", "Gyan"]  // array

const myObj = {                           // object
    name: "Ansh",
    age: 22,
}

const myFunction = function (){           // fuction
    // console.log("This is myFuntion")
}

myFunction();

// console.log(typeof student);


// ________________________________________________________

// primitive datatypes store in stack memory , call by value means a copy

// non- primitive - heap   , call by reference means actual value

let fullName = "anshu sharma";

let firstName = fullName;

firstName = "anshu";

console.log(firstName);   //'anshu'
console.log(fullName);    //'anshu sharma'

let userOne = {
    email: "anshu@gmail.com",
    upi: "anshu@ybl"

}

let userTwo = userOne;

// console.log(userOne.email);
// console.log(userTwo.email);

function example(){
    let x = 10;            // Primitive, stored in stack
    let y = {name:"Anshu"} // Object, reference in stack, data in heap
    let z = y;             // Reference copied, both point to the same heap memory
    z.name = "Ankit";      // Changes affect the original object in the heap
    // console.log(y);
}

example();


