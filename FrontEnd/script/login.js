//---------------------------------------------------------------
//--------------------------LOGIN--------------------------------
//---------------------------------------------------------------
const logInForm = document.getElementById("logIn-form"); //récup du formulaire complet
logInForm.addEventListener("submit", (event) => {
  //création d'un event
  event.preventDefault(); //empêche l'envoi du formulaire

  const email = document.getElementById("email").value; //création const email avec une valeur entrée par l'utilisateur
  const password = document.getElementById("password").value; //création const password avec une valeur entrée par l'utilisateur
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4";

  const validEmail = "sophie.bluel@test.tld"; //const email valide
  const validPassword = "S0phie"; //const password valide

  if (email === validEmail && password === validPassword) {
    //condition : si l'ensemble des 2 const sont valides...
    alert(
      "Bienvenue, Madame Bluel" //message popup "ok"
    );
    window.location.href = "../index.html"; //et redirection vers page index.html
    localStorage.setItem("isLoggedIn", "true"); //stock un indicateur de connexion dans le localstorage
  } else {
    alert("Veuillez rentrer des identifiants valides"); //sinon popup message d'erreur
  }

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    document.getElementById("btn-login").textContent = "logout";
  }
});
