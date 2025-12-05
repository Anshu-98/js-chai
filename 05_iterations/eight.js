// reduce function

const myNumbers = [1, 2, 3];
const sum = myNumbers.reduce((acc, curVal) => {
    // console.log(`acc: ${acc} and curVal: ${curVal}`);
    return acc + curVal;
}, 0);

// console.log(sum);

const shoppingCart = [
    {name: "JavaScript", price: 150},
    {name: "ReactJS", price: 200},
    {name: "NodeJS", price: 250},
]

const totalPrice = shoppingCart.reduce((acc, curItem) => {
    return acc + curItem.price;
}, 0);

console.log(totalPrice);