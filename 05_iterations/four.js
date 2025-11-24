const myObject = {
  js: 'JavaScript',
  cpp: "C++",
  rb: "Ruby",
  sw: "Swift"
};

// To iterate over an object's properties, we can use Object.entries()
// for (const [key, value] of Object.entries(myObject)) {
//   console.log(`${key}: ${value}`);
// }

// for...in loop

for (const key in myObject) {
  
//   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const arr = [100, 200, 300, 400, 500];

for (const index in arr) {
//   console.log(`Index ${index} has value ${arr[index]}`);
}


const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

for (const key in map) {
  console.log(`${key}`);                        // Maps cannot be directly iterated with for...in
}

