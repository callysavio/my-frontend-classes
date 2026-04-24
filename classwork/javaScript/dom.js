// let para1 = document.getElementById("p1");
let para1 = document.querySelector("#p1");
console.log((para1.textContent = "I have been changed by textContent"));

let newText = (para1.innerHTML = "<h1>I am innerHTML</h1>");
console.log(newText);
// let allParagraphs = document.getElementsByClassName("para");
// console.log(allParagraphs);

// for (i = 0; i < allParagraphs.length; i++) {
// //   allParagraphs[i].innerHTML = "I have been used javaScript";
//   console.log(allParagraphs[i]);
// }

let img = document.querySelector("img");
console.log(img);
img.setAttribute("width", "500");
img.setAttribute("height", "500");
img.removeAttribute("height");

let box = document.querySelector(".box");
box.classList.add("new-style");
box.classList.toggle("new-style");

let unorderedList = document.createElement("ul");
console.log(unorderedList);
let li = document.createElement("li");
li.textContent = "I am Callistus";

document.body.appendChild(unorderedList);
unorderedList.appendChild(li);
unorderedList.innerHTML = `
   <li>Saballi</li>
   <li>Praise</li>
   <li>Tobi</li>
   <li>Basit</li>
   <li>Clinton</li>
`;

box.parentNode.removeChild(box);
unorderedList.parentNode.removeChild(unorderedList);
