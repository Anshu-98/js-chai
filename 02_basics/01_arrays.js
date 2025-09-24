// -----------------Arrays-------------------
// stores diferrent type of data

const myArr = [0,1,2,3,4,5]

const myArr3 = ["Anshu", 121, "323", ["jk", "dk"], {name:'Ravi', dept:"CS"}] 

const myHeros = ["IronMan", "Spider-Man", "Hulk"] 

const myArr2 = new Array(1,2,3,4)  // we can also declare array like this 

// console.log(myArr3[4]) 

// ----------------Array Methods--------------

// myArr.push(23)
// myArr.pop()
// myArr.unshift(99)
// myArr.shift()

// console.log(myArr.includes(3))

let newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)

// ---slice,splice---

console.log("A", myArr)

const myn1 = myArr.slice(1,3)          // excludes the last param, do not manupulate original array
console.log(myn1)

console.log("B", myArr)


const myn2 = myArr.splice(1,3)          // inclues the last param, manupulate original array

console.log(myn2)
console.log("C", myArr)




