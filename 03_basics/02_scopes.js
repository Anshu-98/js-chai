// var n03 = 400
let no1 = 200
                            // ** global scope in browser and node envr are different 
if (true){
let no1 = 20
const no2 = 30
// var no3 = 40
// console.log("inner:", no1)
}

// console.log(no1)           // not accesible outside the if block as let has block scope 
// console.log(no2)           // not accesible outside the if block as const has block scope 
// console.log(no3)           // accesible as var has global scope


// -----------------scope level----------------

//nested functions

function one(){
    const username = "Anshu"

    function two(){
        const website ="Github"

        console.log(username)
    }
    //console.log(website)      // child functions can access the variables of parent variable but parent can not access child's varibles
    // two()
}

one()

if(true) {
    const username = "Anshu "
    if(username==='Anshu '){
        const website = "github"
        console.log(username + website)
    }
    // console.log(website)

}

// console.log(username)

//*******interesting */


console.log(addone(5))              // calling addone is possible due to hoisting 
                                    // This code runs without any error, despite the addone() function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope
function addone(num){
    return num + 1
}

console.log(addtwo(5))              //Function hoisting only works with function declarations — not with function expressions
const addtwo = function(num){           // function expression
    return num+ 2
}

