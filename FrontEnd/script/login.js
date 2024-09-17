//---------------------------------------------------------------
//--------------------------LOGIN--------------------------------
//---------------------------------------------------------------
const logInForm = document.getElementById("logIn-form");
logInForm.addEventListener("submit", (event) => {
  event.preventDefault(); //empêche l'envoi du formulaire

  const validEmail = "sophie.bluel@test.tld";
  const validPassword = "S0phie";

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (email === validEmail && password === validPassword) {
    window.location.href = "../index.html";
  } else {
    alert("Veuillez rentrer des identifiants valides");
  }
});
