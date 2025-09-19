// Dates

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.getDate());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate)

// let myCreatedDate = new Date(2025, 9, 19)
// let myCreatedDate = new Date(2025, 9, 19, 1, 13, 7)

let myCreatedDate = new Date("2025/09/13")

// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now();

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());  // both will geive output is milisecond

// console.log(Math.floor(Date.now()/1000))  // converted to sececonds ** for comparison always use ms


let newDate = new Date();

let form = newDate.toLocaleString('default',{
    weekday: "long",
    day: "numeric",
    year: "numeric",
    month: "long",
    timeZone: "IST"
})

console.log(form);