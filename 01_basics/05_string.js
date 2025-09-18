let myName = "Anshu"
let repoNo = 5;

// console.log(myName + " " + repoNo + "sharma"); //not recomended 

//`` This is template literal- used for string interpolation
// console.log(`Hello my name is ${myName.toUpperCase()} and my repo count ${repoNo}`);

let gameName = new String('Contra');

// console.log(gameName)
// console.log(gameName.charAt([3]));
// console.log(gameName.toUpperCase());
let newString = gameName.slice(-4,4);

// console.log(newString);

let string2 = "     Anshu    ";
// console.log(string2);
// console.log(string2.trim());

let url = "https://anshu.com/anshu%20sharma";

// console.log(url.replace("%20", "-"));

// console.log(url.includes('anshu'));

// console.log(gameName.length);


const sentence = "Mario is a classic video game"

let index = 6;

let buzzWord = "specification";

console.log(`The index of ${index} returns the character ${sentence.at(index)}`)

console.log(sentence.concat(index))

console.log(buzzWord.slice(-8,3))

