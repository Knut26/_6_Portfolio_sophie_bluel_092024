//---------------------------------------------------------------
//--------------------------LOGIN--------------------------------
//---------------------------------------------------------------
const logInForm = document.getElementById("logIn-form");
logInForm.addEventListener("submit", (event) => {
  event.preventDefault(); //empêche l'envoi du formulaire

  const validEmail = "sophie.bluel@test.tld";
  const validPassword = "S0phie";

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === validEmail && password === validPassword) {
    alert(
      "Bienvenue admin, vous allez être redirigé vers la page d'accueil..."
    );
    window.location.href = "../index.html";
  } else {
    alert("Veuillez rentrer des identifiants valides");
  }
});
