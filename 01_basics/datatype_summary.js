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


// ________________________________________________________

// primitive datatypes store in stack memory , call by value means a copy

// non- primitive - heap   , call by reference means actual value

let fullName = "anshu sharma"

let firstName = fullName

firstName = "anshu"

console.log(firstName);
console.log(fullName);

let userOne = {
    email: "anshu@gmail.com",
    upi: "anshu@ybl"

}

let userTwo = userOne;

console.log(userOne.email);
console.log(userTwo.email);


