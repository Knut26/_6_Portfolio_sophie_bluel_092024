document.addEventListener("DOMContentLoaded", () => {
  //---------------------------------------------------------------
  //--------------------------LOGIN / LOGOUT-----------------------
  //---------------------------------------------------------------
  //PARTIE FONCTIONNELLE DE RECUPERATION DES IDENTIFIANTS ET DU TOKEN
  const loginApi = "http://localhost:5678/api/users/login";
  const logInForm = document.getElementById("logIn-form"); //récup du formulaire complet

  logInForm.addEventListener("submit", validSubmit); //crée un évènement au remplissage du formulaire avec en
  //paramètres la fonction "validSubmit"

  async function validSubmit(event) {
    //crée function validSubmit
    event.preventDefault(); //empêche l'envoi du formulaire

    let user = {
      //crée un "user" avec la valeur récupérée dans les input email et password
      email: document.getElementById("email").value, //valeur de l'email rentrée par le user
      password: document.getElementById("password").value, //valeur du password rentrée par le user
    };

    let response = await fetch(loginApi, {
      //on crée un fetch pour login
      method: "POST", // pour envoyer les infos de connexion email et password à l'API
      headers: {
        //permet d'effectuer !== actions sur les en-têtes de requête et de réponse HTTP
        accept: "application/json", //format mime que le client pourra interpréter
        "Content-Type": "application/json", //nom de l'extension mime (.json)
      },
      body: JSON.stringify(user), //convertit les données en valeur .JSON
    });

    if (response.status !== 200) {
      const errorBox = document.createElement("div");
      errorBox.className = "error-box";
      errorBox.innerHTML = "Erreur dans l’identifiant ou le mot de passe";
      const loginContainer = document.querySelector(".log-in__container");
      loginContainer.style.color = "orangered";
      const mdp = document.querySelector(".mdp");
      mdp.appendChild(errorBox);
    } else {
      let result = await response.json();
      const validToken = result.token;
      sessionStorage.setItem("authToken", validToken);
      //function login() {
      //localStorage.setItem("isLoggedIn", "true");
      window.location.href = "../index.html";
      //}
    }
    login();

    console.log(response);
    console.log(sessionStorage.getItem("authToken"));
    console.log(user);
  }
  validSubmit();
});
/*
//
//
//

        //

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
