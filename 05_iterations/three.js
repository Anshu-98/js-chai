// for of 


const arr = [10, 20, 30, 40, 50];

for (const num of arr) {
  // console.log(num);
}

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

const greetings = "hello world";

for (const char of greetings) {
  // console.log(`Each char is ${char}`);
}

// Maps

const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

// console.log(map);
for (const [key, value] of map) {
  // console.log(`${key}: ${value}`);
}

const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

// for (const [key, value] of myObject) {
//     console.log(`${key}: ${value}`);              // objects cannot be directly iterated with for...of
// }

