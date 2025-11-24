const coding = ["JavaScript", "Python", "C++", "Java", "Ruby"]; 

coding.forEach( function(item){
    // console.log(item)
})

coding.forEach( (item)=> {
    // console.log(item)
})

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
    console.log(item.name + " is " + item.difficulty);
})