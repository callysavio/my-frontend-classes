// get our inputs and store in a variable
let userName = document.getElementById("name");
let email = document.getElementById("email");
let age = document.getElementById("age");
let genders = document.querySelectorAll(".gender");
let dataContainer = document.querySelector("#users-data");
let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
let message = document.getElementById("msg");

// function to handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ensure all fields are filled before submission
  if (!userName.value && !email.value && !age.value && !genders.value) {
   throw  alert(new Error("All fields are required"));
  }
  msg.textContent = "Submision in progress...";

  let dataList = document.createElement("ul");
  dataContainer.appendChild(dataList);

  // select the value for gender and uncheck after submission
  genders.forEach((gender) => {
    if (gender.checked) {
      selectedGender = gender.value;
      gender.checked = false;
    }
  });

  setTimeout(function () {
    msg.textContent = "Data submitted successfully";
    dataList.innerHTML = `
      <li>${userName.value}</li>
      <li>${email.value}</li>
      <li>${age.value}</li>
      <li>${selectedGender}</li>
  `;
    //clear form input fields
    allInputs.forEach((input) => {
      return (input.value = "");
    });
  }, 3000);
});
