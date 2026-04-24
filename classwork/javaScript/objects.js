// const person = {
//   age: 45,
//   firstName: "Callistus",
//   lastName: "Anwara",
//   complexion: "Dark",
//   height: 5.5,
//   weight: 65,
//   children: ["Praise", "Tobit", "Basit", "Clinton"],
//   isMarried: true,
//   wives: {
//     first: "Chioma",
//     second: "Chidinma",
//   },
//   message: function () {
//     return `Welcome ${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person.message());

//Create an Object
const person = {
  lastName: "Doe",
  firstName: "John",
  age: 50,
  eyeColor: "blue",
  myCars: {
    car1: {
      brand: "Toyota",
      colors: ["Red", "Yellow", "Gold"],
      weight: 150,
    },
    car2: {
      brand: "BMW",
      colors: ["blue"],
      weight: 300,
    },
    car3: {
      brand: "Mercedes",
      colors: ["black"],
      weight: 350,
    },
  },
};

let carColors = person.myCars.car1.colors;
console.log(1 + ". " + carColors[0]);
// carColors.map((color, index) => {
//   return console.log(`${colors[0]}`);
// });


function fetchData() {
  
}
