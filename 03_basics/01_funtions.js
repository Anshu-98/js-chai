//-------------------Functions---------

function myName(){                  // functions declration
console.log("A")
console.log("N")
console.log("S")
console.log("H")
console.log("U")
}

// myName  -- function reference

// myName()    -- fucntion calling/execution

function addNumbers(number1, number2){

    // let result = number1+number2
    // return result
    
    return number1+number2

    console.log("execute this line")   // this line will never execute as return is exit point on a function

}

// addNumbers(3,4);    // 7

const result = addNumbers(3,4)
// console.log("Result:" ,result)

function isUserLogged(user){
    // if (user=== undefined)
        
    if (!user)    {

    console.log("please provide username")
        return
    }
    
    return `${user} is logged in`
}

isUserLogged("Anshu")

// console.log(isUserLogged("Anshu"));
// console.log(isUserLogged());  // undefined is logged in

function calculateCartPrice(val1,val2, ...num1){        // "..." rest operator bundules the arguments/values. also take rest of the arguments

    return num1

}

// console.log(calculateCartPrice(200,400,500,650,550))

const user = {
    username:"Anshu",
    price: 299
}

function userDetails(anyobject)
{
    return console.log(`Username is ${anyobject.username} and price is ${anyobject.price}.`)
}

// userDetails(user)

userDetails({
    username: "Jake",
    price: 399
})

const itemPrices = [200,300,500,700];

function returnPrice(getArray){
    return getArray[1]
}

// console.log(returnPrice(itemPrices))