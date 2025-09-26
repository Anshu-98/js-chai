// const tinderUser = new Object();        it is a singleton object 
const tinderUser = {}                   // but this is not a singleton object


tinderUser.id = "444fcd"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "ffcs@gmail.com",
    name:{
        userFullName: {
            firstName: "Anshu",
            lastName: "Sharma"
        }
    }
}

// console.log(regularUser.name?.userFullName.firstName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const Target ={}
// const newObj = Object.assign(Target,obj1,obj2)
const newObj = {...obj1, ...obj2}



// console.log(newObj)

// console.log(newObj === Target);

const newUser = [
    {
        email:"e@sdjf.com"
    },
    {
        address:"Lucknow"
    },
    {
        id:1244
    },
]

// console.log(newUser[0].email)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.isFrozen(tinderUser));


// console.log(tinderUser.hasOwnProperty("id"))

//-----------object destructuring-------------

const course = {
    courseName: "Java 2025",
    coursePrice: "999",
    courseInstructor: "Sumit"
}

// console.log(course.courseInstructor) 

const {courseInstructor: instructor} = course   // object is destuctured, we can provide any name to destructed key

// console.log(courseInstructor)
console.log(instructor)

// JSON: javascript object notation

// {
//     "id": 2233,
//     "name": "anshu",               // in object form
//     "age": 26
// }

// [
//     {},                               // in array form 
//     {}
// ]


