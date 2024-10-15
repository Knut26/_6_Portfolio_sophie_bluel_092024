document.addEventListener("DOMContentLoaded", () => {
  //
  //
  //---------------------------------------------------------------
  //--------------------------LOGIN / LOGOUT-----------------------
  //---------------------------------------------------------------
  //
  //

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
      //suppr error si déjà existante
      let errorBox = document.getElementById("errorBox");
      if (errorBox) {
        //si message d'erreur...
        errorBox.remove(); //...efface le précédent message d'erreur
      }
      errorBox = document.createElement("div"); //crée une div
      errorBox.className = "error-box"; //
      errorBox.id = "errorBox";
      errorBox.innerHTML = "Erreur dans l’identifiant ou le mot de passe";
      const loginContainer = document.querySelector(".log-in__container");
      loginContainer.style.color = "red"; //couleur RED police email & password si status !== 200
      const mdp = document.querySelector(".mdp");
      mdp.appendChild(errorBox);
    } else {
      let result = await response.json();
      const validToken = result.token;
      sessionStorage.setItem("authToken", validToken); //stock token dans la session ouverte
      //function login() {
      //localStorage.setItem("isLoggedIn", "true");
      window.location.href = "../index.html"; //redirection vers index.html
      //}
      //login();
    }

    console.log(response);
    console.log(sessionStorage.getItem("authToken"));
    console.log(user);
  }
});
