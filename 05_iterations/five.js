const coding = ["JavaScript", "Python", "C++", "Java", "Ruby"]; 

coding.forEach( function(item){
    // console.log(item)
})

const values = coding.forEach( (item)=> {
    // console.log(item)
    return item;
})
// console.log(values);  // undefined for each loop returns no value
greet = (item)=>{
    // console.log(item);
}

coding.forEach(greet);

coding.forEach((item,index,arr)=>{
    // console.log(item, index, arr);
})

const myCoding  = [
    {name: "JavaScript", difficulty: "Medium"},
    {name: "Python", difficulty: "Easy"},
    {name: "C++", difficulty: "Hard"},
    {name: "Java", difficulty: "Medium"},
    {name: "Ruby", difficulty: "Easy"}
]

myCoding.forEach( (item)=>{
    // console.log(item.name + " is " + item.difficulty);
})


// filter method
const myNums = [1,2,3,4,5];

const newmyNums = myNums.filter( (num)=> { return num>2})

console.log(newmyNums);  // use return statement in filter method

