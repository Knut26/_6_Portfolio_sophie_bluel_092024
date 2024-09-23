document.addEventListener("DOMContentLoaded", () => {
  //---------------------------------------------------------------
  //--------------------------LOGIN / LOGOUT-----------------------
  //---------------------------------------------------------------
  //PARTIE FONCTIONNELLE DE RECUPERATION DES IDENTIFIANTS ET DU TOKEN
  const loginApi = "http://localhost:5678/api/users/login";
  const logInForm = document.getElementById("logIn-form"); //récup du formulaire complet

  logInForm.addEventListener("submit", validSubmit);
  //création d'un event

  async function validSubmit(event) {
    event.preventDefault(); //empêche l'envoi du formulaire

    let user = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

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
    console.log(user);

    //alert(result.message);
  }
  validSubmit();
});
/*
  async function submit() {
    //création d'une fonction async
    let email = document.getElementById("email").value; //création const email avec une valeur entrée par l'utilisateur
    let password = document.getElementById("password").value; //création const password avec une valeur entrée par l'utilisateur

    const validEmail = "sophie.bluel@test.tld"; //const email valide
    const validPassword = "S0phie"; //const password valide

    let user = {
      //avec les identifiants rentrés par l'utilisateur
      email: email.value,
      password: password.value,
    };

    const logInForm = document.getElementById("logIn-form"); //récup du formulaire complet
    logInForm.addEventListener("submit", (event) => {
      //création d'un event
      event.preventDefault(); //empêche l'envoi du formulaire

      const loginApi = "http://localhost:5678/api/users/login"; //const de l'adresse api

      let response = fetch(loginApi, {
        //fetch de cette const
        method: "POST", //on post les identifiants de l'utilisateur
        headers: {
          //permet d'effectuer !== actions sur les en-têtes de requête et de réponse HTTP
          accept: "application/json", //format mime que le client pourra interpréter
          "Content-Type": "application/json", //nom de l'extension mime (.json)
        },
        body: JSON.stringify(user), //convertit les données en valeur .JSON
      });

      let result = response.json();
      console.log(user);
      console.log(result);

      if (email === validEmail && password === validPassword) {
        //condition : si l'ensemble des 2 const sont valides...
        alert(
          "✅ Mode administrateur ✅" //message popup "ok"
        );
        window.location.href = "../index.html"; //et redirection vers page index.html
      } else {
        alert("🔴 Erreur dans l’identifiant ou le mot de passe 🔴"); //sinon popup message d'erreur
      }
    });
  }
  submit();
  */

//
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//

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
