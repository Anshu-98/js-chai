const accountID = 122456
let accountEmail = "anshu@gmail.com"
var accountPassword = "220099"
let accountState; // It will we undefined as no value is assigned to variable
accountCity = "Lucknow"  // not recommended

// accountID = "222222"  // not allowed because we can not reassign a value to const
accountEmail = "as@gmail.com" // allowed because let can be reassign
accountPassword = "3334455"

accountCity = "Agra"

// console.table([accountID,accountEmail, accountPassword, accountCity, accountState])

/* prefer not to use var
because issue in block scope and functional scope*/

// understand block and function scope with the help of below example

{
    let x = 10
    const y = 20
    console.log(x,y);  // Acessible here 
}
// console.log(x,y);   Error: x and y are not defined

function test() {
    if (true) {
        var z = 30;
    }
    console.log(z); // Accessible here, outside the function scope
}
test();