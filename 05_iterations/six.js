
const books = [
  { title: "The Silent Forest", genre: "Mystery", publish: 2015, edition: "First" },
  { title: "Beyond the Horizon", genre: "Adventure", publish: 2018, edition: "Second" },
  { title: "Code Chronicles", genre: "Science", publish: 2020, edition: "Third" },
  { title: "Whispers of Time", genre: "Fantasy", publish: 2012, edition: "First" },
  { title: "The Art of Logic", genre: "Education", publish: 2019, edition: "Second" },
  { title: "Shadows in the Mist", genre: "Thriller", publish: 2016, edition: "First" },
  { title: "Journey to Mars", genre: "Science Fiction", publish: 2021, edition: "Fourth" },
  { title: "Mind Over Matter", genre: "Self-Help", publish: 2017, edition: "Second" },
  { title: "Echoes of Eternity", genre: "Historical", publish: 2014, edition: "First" },
  { title: "The Quantum Leap", genre: "Science", publish: 2022, edition: "Third" }
];
let userbooks = books.filter((bk) => bk.genre=== "Science" && bk.publish>=2020);

userbooks = books.filter((bk) => {
    return bk.publish>=2015 && bk.edition!=="First"
});
console.log(userbooks);