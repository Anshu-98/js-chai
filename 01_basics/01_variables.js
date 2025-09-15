const accountID = 122456
let accountEmail = "anshu@gmail.com"
var accountPassword = "220099"
let accountState;
accountCity = "Lucknow"

// accountID = "222222"
accountEmail = "as@gmail.com"
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