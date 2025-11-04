const user ={
    username: "Anshu",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) // this keyword is reffering to current context which is from 1 line to 8 line
        console.log(this)
    }
}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this)       // it will give {}, in node envr this refers to an empty object 
                        // in browser this refers to window object 

// function coffee(){
//     username: "Dude"
//     console.log(this.username)  // undefined, we can not use this with functions in this way it works only with objects
// }  

// const coffee = function (){
//     username: "Dude"
//     console.log(this.username)     //undefined
// }

//  coffee()

// _______________ARROW FUNCTIONS_________________

const coffee =  () => {
    username: "Dude"
    console.log(this)     //{}
    console.log(this.username) //undefined
 }

//  coffee()

// const addTwo = (num1, num2) => {             // normal regular function
    // return num1+ num2
// }

// const addTwo = (num1,num2) => num1+num2        // implicit return
// const addTwo = (num1,num2) => (num1+num2)        // implicit return
const addTwo = (num1,num2) => ({username:"Anshu"})        // implicit return
// console.log(addTwo(1,2))




// console.log(addTwo(1,2))

