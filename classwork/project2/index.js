// Select inputs and rules
let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirmPassword");
let confirmMessage = document.getElementById("confirmMessage");

// Rules
let ruleLength = document.getElementById("ruleLength");
let ruleUpper = document.getElementById("ruleUpper");
let ruleLower = document.getElementById("ruleLower");
let ruleNumber = document.getElementById("ruleNumber");
let ruleSpecial = document.getElementById("ruleSpecial");

// Listen while typing
passwordInput.addEventListener("input", checkPasswordRules);
confirmPasswordInput.addEventListener("input", checkPasswordRules);

//check password rules
function checkPasswordRules() {
  let password = passwordInput.value;
  let confirmPassword = confirmPasswordInput.value;

  // Minimum Length
  password.length >= 8
    ? (ruleLength.textContent = "✔ Minimum 8 characters")
    : (ruleLength.textContent = "✖ Minimum 8 characters");

  ruleLength.style.color = password.length >= 8 ? "#059669" : "#ef4444";

  // Uppercase Letter
  ruleUpper.textContent = /[A-Z]/.test(password)
    ? "✔ At least one uppercase letter"
    : "✖ At least one uppercase letter";
  ruleUpper.style.color = /[A-Z]/.test(password) ? "#059669" : "#ef4444";

  // Lowercase Letter
  ruleLower.textContent = /[a-z]/.test(password)
    ? "✔ At least one lowercase letter"
    : "✖ At least one lowercase letter";
  ruleLower.style.color = /[a-z]/.test(password) ? "#059669" : "#ef4444";

  // Number
  ruleNumber.textContent = /[0-9]/.test(password)
    ? "✓ At least one number"
    : "✖ At least one number";
  ruleNumber.style.color = /[0-9]/.test(password) ? "#059669" : "#ef4444";

  // Special Character
  ruleSpecial.textContent = /[!@#$%^&*]/.test(password)
    ? "✓ At least one special character"
    : "✖ At least one special character";
  ruleSpecial.style.color = /[!@#$%^&*]/.test(password) ? "#059669" : "#ef4444";

  //Confirm Password Match
  if (confirmPassword === "") {
    confirmMessage.textContent = "";
  } else if (password === confirmPassword) {
    confirmMessage.textContent = "Passwords match ✓";
    confirmMessage.style.color = "#059669";
  } else {
    confirmMessage.textContent = "Passwords do not match ✖";
    confirmMessage.style.color = "#ef4444";
  }
}

// Form submission handling
let registerForm = document.getElementById("registerForm");
let registerMessage = document.getElementById("registerMessage");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  // 1. Check confirm password
  if (password !== confirmPassword) {
    registerMessage.textContent = "Passwords do not match!";
    registerMessage.style.color = "#ef4444";
    return;
  }

  // 2. Check password rules
  if (
    !(
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    )
  ) {
    registerMessage.textContent = "Password does not meet requirements!";
    registerMessage.style.color = "#ef4444";
    return;
  }

  // 3. Get users from localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // 4. Check if email/username already exist
  let userExists = users.some(
    (user) => user.email === email || user.username === username
  );

  if (userExists) {
    registerMessage.textContent = "Email or Username already exists!";
    registerMessage.style.color = "#ef4444";
    return;
  }

  // 5. Save new user
  let newUser = { fullName, email, username, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // 6. Success message
  registerMessage.textContent =
    "Registration successful! Redirecting to login...";
  registerMessage.style.color = "green";

  // Redirect to Login page after 3 seconds

  setTimeout(() => {
    window.location.href = "login.html";
  }, 3000);
});
