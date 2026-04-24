let data = {
  name: "Callistus",
  age: 23,
  state: "Ebonyi",
  nationality: "Nigerian",
  gender: "Female",
};

// function fetchData
let container = document.getElementById("container");
let loading = document.querySelector("p");
// const fetchData = () => {
//   loading.textContent = "Data loading...";
//   setTimeout(() => {
//     displayData();
//     loading.textContent = "Success! Data Fetched:";
//   }, 5000);
// };

// function displayData() {
//   container.innerHTML = `
//       <ul>
//        <li>${data.name}</li>
//        <li>${data.age}</li>
//        <li>${data.state}</li>
//        <li>${data.nationality}</li>
//        <li>${data.gender}</li>
//       </ul>
//     `;
// }

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 5000);
  });
}

async function showData() {
  console.log("Fetching...");
  const data = await fetchData();
  console.log(data);
}
function isEven(num) {
  return num % 2 === 0; // Incorrect logic
}

console.log(isEven(4)); // Outputs true instead of false

function throwError() {
  try {
    let data = JSON.parse('{"name":"Jane"}');
    console.log(data.age);
    throw new Error("An error occured. Try again later:");
  } catch (error) {
    console.error("Error: ", error.message);
  } finally {
    console.log("Cleaning up resources...");
  }
}
throwError();
