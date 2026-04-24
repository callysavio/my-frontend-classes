let age = "";
let hasCard = 0;
if (age >= 18 || hasCard) {
  alert(`You are eligible to vote!`);
} else {
  alert(`You are NOT eligible to vote!`);
}
// age >= 18
//   ? alert(`You are ${age}'s years old and are eligible to vote!`)
//   : alert(`You are ${age}'s years old and are NOT eligible to vote!`);

// let score = prompt("Enter your score");
// if (score >= 90) {
//   alert(`Your grade is: A`);
// } else if (score >= 60) {
//   alert(`Your grade is: B`);
// } else if (score >= 45) {
//   alert(`Your grade is: C`);
// } else if (score >= 35) {
//   alert(`Your grade is: D`);
// } else {
//   alert(`You failed woefully`);
// }

// switch
// let score = 70;
// switch (score) {
//   case 70:
//     alert("Your grade is A");
//     break;
//   case 60:
//     alert("Your grade is B");
//     break;
//   case 50:
//     alert("Your grade is C");
//     break;
//   case 40:
//     alert("Your grade is D");
//     break;
//   default:
//     alert("Your grade is F");
// }

let person = "Gi";

let gender = person === "Girl" ? "Female" : "Male";

console.log(gender); // ➝ "Male"
