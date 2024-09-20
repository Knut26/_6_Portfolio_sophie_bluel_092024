document.addEventListener("DOMContentLoaded", () => {
  //---------------------------------------------------------------
  //--------------------------LOGIN / LOGOUT-----------------------
  //---------------------------------------------------------------

  async function submit() {
    let user = {
      email: "sophie.bluel@test.tld",
      password: "S0phie",
    };

    const loginApi = "http://localhost:5678/api/users/login";

    let response = await fetch(loginApi, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    let result = await response.json();
    console.log(result);

    alert(result.message);
  }
  submit();
  /*
  //
  //
  const logInForm = document.getElementById("logIn-form"); //récup du formulaire complet
  logInForm.addEventListener("submit", (event) => {
    //création d'un event
    event.preventDefault(); //empêche l'envoi du formulaire

    const email = document.getElementById("email").value; //création const email avec une valeur entrée par l'utilisateur
    const password = document.getElementById("password").value; //création const password avec une valeur entrée par l'utilisateur
    const btnLogin = document.getElementById("btn-login");
    
    const validEmail = "sophie.bluel@test.tld"; //const email valide
    const validPassword = "S0phie"; //const password valide

    if (email === validEmail && password === validPassword) {
      //condition : si l'ensemble des 2 const sont valides...
      alert(
        "✅ Mode administrateur ✅" //message popup "ok"
      );
      localStorage.setItem("isLoggedIn", "true"); //stock un indicateur de connexion dans le localstorage
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn === "true") {
        btnLogin.textContent = "logout";
        window.location.href = "../index.html"; //et redirection vers page index.html
        const modeEdition = document.querySelectorAll(".hidden");
        modeEdition.style.display = "block";
      }
    } else {
      alert("🔴 Erreur dans l’identifiant ou le mot de passe 🔴"); //sinon popup message d'erreur
    }
  });*/

  /*

  function deco() {
    btnLogin.addEventListener("click", () => {
      alert("Déconnexion");
    });
  }
  deco();*/
});
