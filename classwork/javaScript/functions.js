let email = "callistus@gmail.com";

function greetUsers() {
  let myName = "Callistus";
  return console.log(`Welcome ${myName}. Your email address is: ${email}.`);
}

console.log(myName);
greetUsers();

const add = function (num1, num2, ...numbers1) {
  let result = +num2;
  return result;
};
console.log(add(100, 222.4, 10, 11, 12));

const multiplyNumbers = (a, b) => a * b + myName;

console.log(multiplyNumbers(100, 2));

// immediately invoked function
(function () {
  console.log("This is an immediately invoked function");
})();

//higher order function
function operate(a, b, operation) {
  return operation(a, b);
}

const result = operate(5, 3, (x, y) => x + y);
console.log(result); // Output: 8


