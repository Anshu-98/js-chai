//if statement

// let num1 = 3
// if (num1 >10){

//     console.log(`the number ${num1} is greater than to 10`)

// }
// else if( num1 === 10){
//     console.log(`the number ${num1} is equal to 10`)
// }
// else{
//     console.log(`the number ${num1} is less than to 10`)
// }

// shorthand notation
// const balance = 1000
// if (balance> 500) console.log("you have enough balance");  // this has implicit scope without {}


const userLoggedIn = true
const debitCard = true
const userLoggedinFromGoogle = true
const userLoggedinFromEmail = false

// if(userLoggedIn && debitCard &&){
//     console.log("Allow to buy course")
// }
// else{
//     console.log("Please sign up and enter card details")
// }

if(userLoggedinFromGoogle|| userLoggedinFromEmail){
    console.log("You are logged in")
}