document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("email-field");
  const passwordField = document.getElementById("password-field");
  const email = emailField.value;
  const password = passwordField.value;
  if (email === "shontan@gmail.com" && password === "shontan143@") {
    window.location = "inside.html";
  } else {
    console.log("invalid");
  }
});
