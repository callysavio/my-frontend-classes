let button = document.querySelector("button");

console.log(button);
// button.addEventListener("click", () => {
//   alert("I am Callistus");
// });

button.removeEventListener("click", () => {
  alert("I am Callistus");
});
