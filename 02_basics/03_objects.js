// singlton- when is created using constrctor 
// Object.create

// Object literals
const mySym = Symbol()
const JsUser = {
    name: "Anshu",
    "Full Name": "Anshu Sharma",
    age: 24,
    [mySym]: "myKey1",                // symbols are declared with []
    location: "Lucknow",
    email: "anshu@gmail.com",
    isLoggedIn: true,
    loggedDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["Full Name"]);      //* keys declared with multiword can only be accesible through []
// console.log(JsUser[mySym])              // symbols are also accessed through []
// console.log(typeof JsUser[mySym])

JsUser.email = "anshu@cmc.com"

// console.log(JsUser)

// Object.freeze(JsUser)

JsUser.email = "anshu@tcs.com"

// console.log(JsUser)

JsUser.greetings = function(){
    console.log("Hello JS user")
}

JsUser.greetings2 = function(){
    console.log(`Hello user, ${this["Full Name"]}`)
}
console.log(JsUser.greetings)
console.log(JsUser.greetings())
console.log(JsUser.greetings2())