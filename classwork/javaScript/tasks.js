function addNumbers(a, b, c) {
  let result = a + b + c;
  return console.log(result);
}

addNumbers(1, 2, 3);

function isEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// let person = {
//   name: "Callistus",
//   age: 23,
//   gender: "Male",
//   complexion: "Dark",
//   submitDetails: function () {
//     alert("Data Submitted Successfully!");
//   },
// };

// person.submitDetails();

console.log(isEven(1.5));

// find maximum
function findMax(a, b, c) {
  if (a > b && a > c) {
    return `${a} is the maximum number!`;
  } else if (b > a && b > c) {
    return `${b} is the maximum number!`;
  } else if (c > a && c > b) {
    return `${c} is the maximum number!`;
  } else {
    return `No maximum number. All numbers equal!`;
  }
}

console.log(findMax(1, 2, 3));

// find the factorial
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
    // result = result * i;
  }
  return result;
}
console.log(factorial(15));

let numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
  numsArray[0] + numsArray[1] + numsArray[2] + numsArray[3] + numsArray[4]
);
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum += arr[i];
    sum = sum + arr[i];
  }
  return console.log(sum);
}

sum(numsArray);

//abstract even numbers from the array
function evenNumbers() {
  let evenNumbers = numsArray.filter((num) => {
    return num % 2 === 0;
  });
  return evenNumbers;
}

console.log(evenNumbers(numsArray));

//no. 7: The longest word in array
let wordsArray = ["Love", "Boy", "Forward", "Number", "Immediately"];
function longestWord(words) {
  let longestWord = "";
  console.log(longestWord.length);

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
  //compare items in array to get the longest
}

console.log(longestWord(wordsArray));

// no. 8: Reverse of items in an array
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray(wordsArray));

class Person {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name}. I am ${this.age} years old. I earn ${this.salary} monthly`
    );
  }
}

const callistus = {
  name: "Callistus",
  age: 40,
  salary: 1000,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name}. I am ${this.age} years old. I earn ${this.salary} monthly`
    );
  },
};

const ada = {
  name: "Ada",
  age: 20,
  salary: 3000,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name}. I am ${this.age} years old. I earn ${this.salary} monthly`
    );
  },
};

const student = new Person("Ada", 21, 2000);
const student2 = new Person("Callistus", 40, 1000);
console.log(student);
console.log(student2);

student.greet(); // Output: Hello, my name is Ada
student2.greet();

class Employee extends Person {
  constructor(name, age, position) {
    super(name, age); // Call parent constructor
    this.position = position;
  }

  work() {
    console.log(`${this.name} is working as a ${this.position}`);
  }
}

const dev = new Employee("Mark", 25, "Developer");
dev.work(); // Mark is working as a Developer

//function to print properties of an object
// const printProperties = () => {

// };

let person = {
  nyname: "Praise",
  age: 24,
  grade: "A",
  salary: 3000000,
};

function printProperties() {
  console.log(`
    ${person.name}
    ${person.age}
    ${person.grade}
    `);
}

printProperties();

//function to count object properties
function countProperties() {
  // return Object.keys(person).length;
  for (let property in person) {
    return property.length;
  }
}
console.log(countProperties());

let studentsData = [
  {
    name: "Sabali",
    grade: 23,
    age: 42,
  },
  {
    name: "Emmanuel",
    grade: 100,
    age: 19,
  },
  {
    name: "Tobi",
    grade: 12,
    age: 12,
  },
  {
    name: "Basit",
    grade: 50,
    age: 19,
  },
];

function highestStudent(students) {
  let highest = students[0];
  for (let student of students) {
    if (student.grade > highest.grade) {
      highest = student;
    }
  }
  return highest;
}

console.log(highestStudent(studentsData));

const button = document.getElementById("btn");
let paragraph = document.getElementById("para");

button.addEventListener("click", () => {
  paragraph.innerText = `Hello JavaScript`;
});

// let addBtn = document.getElementById("addBtn");

function addItem() {
  const input = document.getElementById("itemInput");
  const newItem = document.createElement("li");
  newItem.innerText = input.value;

  document.getElementById("russel").appendChild(newItem);
  input.value = "";
}

const safe = document.getElementById("colorbtn");

safe.addEventListener("click", function () {
  const randomColor = "#" + math.floor(math.random() * 16777215).toString(16);

  Document.body.style.BackgroundColor = randomColor;
});
// addBtn = addEventListener("click", () => {});
// PART 2 — Solutions
// Functions
// // 1. Sum of Two Numbers
// function sum(a, b) {
//     return a + b;
// }

// // 2. Even or Odd Checker
// function isEven(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }

// // 3. Find Maximum of Three Numbers
// function findMax(a, b, c) {
//     return Math.max(a, b, c);
// }

// // 4. Factorial Calculator
// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// Arrays & Array Methods
// // 5. Sum of Array Elements
// function sumArray(arr) {
//     return arr.reduce((acc, num) => acc + num, 0);
// }

// // 6. Filter Even Numbers
// function filterEvens(arr) {
//     return arr.filter(num => num % 2 === 0);
// }

// // 7. Find Longest Word
// function longestWord(words) {
//     let longest = "";
//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }
//     return longest;
// }

// // 8. Reverse an Array (without reverse())
// function reverseArray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i > 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// // 9. Sort Numbers in Ascending Order
// function sortAscending(arr) {
//     return arr.sort((a, b) => a - b);
// }

// Objects
// // 10. Object Property Access
// let student = { name: "John", age: 20, grade: "A" };
// function printStudentInfo(stud) {
//     console.log(`Name: ${stud.name}`);
//     console.log(`Age: ${stud.age}`);
//     console.log(`Grade: ${stud.grade}`);
// }

// // 11. Count Properties in an Object
// function countProperties(obj) {
//     return Object.keys(obj).length;
// }

// // 12. Find Student with Highest Score
// function topStudent(students) {
//     let highest = students[0];
//     for (let student of students) {
//         if (student.score > highest.score) {
//             highest = student;
//         }
//     }
//     return highest.name;
// }

// DOM Manipulation
// <!-- HTML for Q13, Q14, Q15 -->
// <p id="myPara">Original text</p>
// <button id="changeTextBtn">Change Text</button>

// <input type="text" id="listInput" placeholder="Enter item">
// <button id="addItemBtn">Add to List</button>
// <ul id="myList"></ul>

// <button id="changeColorBtn">Change Background Color</button>

// <script>
// // 13. Change Paragraph Text
// document.getElementById("changeTextBtn").addEventListener("click", function() {
//     document.getElementById("myPara").innerText = "Hello, JavaScript!";
// });

// // 14. Add List Items to <ul>
// document.getElementById("addItemBtn").addEventListener("click", function() {
//     const input = document.getElementById("listInput");
//     const li = document.createElement("li");
//     li.innerText = input.value;
//     document.getElementById("myList").appendChild(li);
//     input.value = ""; // Clear input
// });

// // 15. Change Background Color Randomly
// document.getElementById("changeColorBtn").addEventListener("click", function() {
//     const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = randomColor;
// });
// </script>
