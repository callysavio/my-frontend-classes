let loginForm = document.getElementById("loginForm");
let loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let identifier = document.getElementById("loginIdentifier").value;
  let password = document.getElementById("loginPassword").value;

  // Retrieve users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
  let user = users.find(
    (user) =>
      (user.email === identifier || user.username === identifier) &&
      user.password === password
  );

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    loginMessage.textContent = "Login successful! Redirecting to dashboard...";
    loginMessage.style.color = "#4CAF50";

    // Redirect to dashboard after a short delay
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 3000);
  }
});
