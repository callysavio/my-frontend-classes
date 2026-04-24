let fruits = ["Banana", "Guava", "Pineaple", "Grape", "Apple"];
console.log(fruits);
fruits[1] = "Orange";
console.log(fruits);
console.log(fruits[3]);
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
let cartItems = [];
fruits.push("Mango");
console.log(fruits);
fruits.push({
  name: "Pear",
  price: 1000,
  color: "green",
});

console.log(fruits);
fruits.unshift("Peach");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);

let scores = [11, 10, 1, 2, 13, 4, 5, 6, 7, 8, 9, 51];
scores[0];
console.log(scores);
console.log(scores[0]);

let squares = scores.map((score) => score * score);

let evenNumbers = scores.find((num) => num > 5);

console.log(squares);
console.log(evenNumbers);

let sum = scores.reduce((total, num) => total * num);
console.log(sum);
scores.sort((a, b) => {
  if (a < b) {
    return a - b;
  }
});
console.log(scores);
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);
console.log(matrix[2][1]);
// Inventory of products with item name, quantity, and price
let inventory = [
  { item: "orange", quantity: 6, price: 200 },
  { item: "Banana", quantity: 5, price: 800 },
  { item: "Cherry", quantity: 12, price: 300 },
  { item: "Mango", quantity: 8, price: 100 },
];

// 1. Get all quantities in the inventory
const quantities = inventory.map((product) => product.quantity);
console.log("Quantities:", quantities);

// 2. Calculate the total number of products available
const totalProducts = quantities.reduce(
  (total, quantity) => total + quantity,
  0
);
console.log("Total Quantity of Products:", totalProducts);

// 3. Function to get product details by item name
function getProductDetails(productName) {
  // Convert input and inventory items to lowercase for case-insensitive comparison
  const product = inventory.find(
    (p) => p.item.toLowerCase() === productName.toLowerCase()
  );

  if (!product) {
    console.log("The item does not exist in the inventory.");
    return null;
  } else {
    console.log("Product found:", product);
    return product;
  }
}

// Example usage: get product details for "Cherry"
getProductDetails("Cherry");

// Example usage: get product details for an unknown product
getProductDetails("Apple");
