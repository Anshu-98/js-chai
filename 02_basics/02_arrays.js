const marvel_heros = ["Spiderman", "Thor", "Hulk"]
const dc_heros = ["Batman","Flash", "Superman"]

// marvel_heros.push(dc_heros)

// const marvel_dc = marvel_heros.concat(dc_heros)   // concat() returns new array
// console.log(marvel_dc)

const marvel_dc = [...marvel_heros, ...dc_heros]   // most prefferd because we can concat more than two arrays here

// console.log(marvel_dc)


// const another_array = [1,2,3,[4,5,6],7,[8,[9,10]]]

// const real_another_array = another_array.flat(Infinity)  // it will array with all subarray

// console.log(real_another_array)

// console.log(Array.isArray("Anshu"))
// console.log(Array.from("Anshu"))
// console.log(Array.from({name: "Anshu"}))**      // returns empty array, provide with one would you like to convert key or value



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))

