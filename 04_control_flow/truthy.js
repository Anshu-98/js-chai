// truthy and falsy values

const userEmail = []

// if(userEmail){
//     console.log("Got user email")
// }
// else{
// console.log("don't have user email")
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN  except these values all are are truthy values 

// truthy values
// "0", 'false', " ", [] any value added in srting even space

// if (userEmail.length === 0){
//     console.log("user not found")
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// Nullish coalesing Operater(??): null undefined

let val1;

// val1 = 4?? 10

// val1 = null?? 10
// val1 = undefined??25
console.log(val1)

// Ternery operator 

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")