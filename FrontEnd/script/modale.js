//
//
//------------------------------------------------------
//-------------intégration modale1----------------------
//------------------------------------------------------
//
//
const modale1 = document.querySelector(".modale-photos");
const authToken = sessionStorage.authToken;
const fetching = fetch("http://localhost:5678/api/works");

function fetchingModale1() {
  fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((data) => {
      for (i = 0; i < data.length; i++) {
        const photoContainer = document.createElement("div");
        photoContainer.className = "photo-container";

        const img = document.createElement("img");
        img.className = "modale-img";
        const imageUrl = data[i].imageUrl;
        img.src = imageUrl;

        //--------------MODALE1 : DELETE-----------------

        const trashCan = document.createElement("p"); //
        trashCan.innerHTML = '<i class="fa-solid fa-trash-can trash"></i>';
        trashCan.className = "trash-can";
        trashCan.id = data[i].id;
        const trashCanId = trashCan.id;

        function deleteImg() {
          const allTrashCans = document.querySelectorAll(".fa-trash-can");
          //console.log(allTrashCans);
          //console.log("id poubelle :", trashCanId);
        }
        trashCan.addEventListener("click", (e) => {
          const initialize = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authorization: "bearer " + authToken,
            },
          };
          console.log("token valide :", authToken);
          fetch(
            "http://localhost:5678/api/works/" + trashCanId,
            initialize
          ).then((response) => {
            return response.json();
          });
        });

        photoContainer.appendChild(img);
        photoContainer.appendChild(trashCan);
        modale1.appendChild(photoContainer);
        deleteImg();
      }
    });
}

fetchingModale1();
//
//
//---------------------------------------------------------
//----------------intégration modale2----------------------
//---------------------------------------------------------
//
//

const ajoutPhoto = document.getElementById("ajout-photo");

ajoutPhoto.addEventListener("click", function (event) {
  event.preventDefault();
  modale1.innerHTML = "";
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////
  ajoutPhoto.addEventListener("click", function (event) {
    event.preventDefault();
    const validBox = document.createElement("div");
    validBox.className = "valid-box";
    validBox.innerHTML = "photo validée !";
    select.appendChild(validBox);
  });
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////
  //------------------flèche backpage-------------------------
  const backArrow = document.createElement("a");
  backArrow.href = "#"; /////////???????????????????????????????????
  backArrow.innerHTML =
    '<p><i class="fa-solid fa-arrow-left back-arrow"></i></p>';
  backArrow.style.color = "black";
  modale1.appendChild(backArrow);
  //--------------addevent sur backArrow--------------------
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////
  backArrow.addEventListener("click", () => {
    modaleWrapper.innerHTML = "Galerie photo";
    close.innerHTML = '<p><i class="fas fa-regular fa-xmark"></i></p>';
    modalePhotos.innerHTML = "";
    modalePhotos.style.display = "grid";
    addPhotoPictureContainer.innerHTML = "";
    addPhotoPicture.innerHTML = "";
    addPhotoPictureButton.innerHTML = "";
    textPhoto.innerHTML = "";
    form1.innerHTML = "";
    formNom.innerHTML = "";
    labelNom.innerHTML = "";
    inputNom.innerHTML = "";
    form2.innerHTML = "";
    formNom2.innerHTML = "";
    labelNom2.innerHTML = "";
    select.innerHTML = "";
    ajoutPhoto.innerHTML = "Ajouter une photo";
    ajoutPhoto.style.backgroundColor = "#1d6154";

    fetchingModale1();
  });
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////

  //------------------croix fermeture modale-------------------------
  const close = document.createElement("a");
  close.href = "#";
  close.innerHTML = '<p><i class="fas fa-regular fa-xmark"></i></p>';
  close.style.color = "black";
  close.id = "comeBackToIndex";
  modale1.appendChild(close);

  //------------------changement titre-------------------------
  const modaleWrapper = document.querySelector(".modale-wrapper");
  modaleWrapper.innerHTML = "Ajout photo";

  //------------------div container-------------------------
  const addPhotoPictureContainer = document.createElement("div");
  addPhotoPictureContainer.className = "add-photo-picture-container";
  modale1.appendChild(addPhotoPictureContainer);

  //------------------font awesome photo-------------------------
  const addPhotoPicture = document.createElement("p");
  addPhotoPicture.href = "#";
  addPhotoPicture.innerHTML =
    '<i class="fa-regular fa-image add-photo-picture"></i>';
  addPhotoPictureContainer.appendChild(addPhotoPicture);

  //------------------ajout button-------------------------
  const addPhotoPictureButton = document.createElement("button");
  addPhotoPictureButton.className = "add-photo-picture-button";
  addPhotoPictureButton.innerHTML = "+ Ajouter photo";
  addPhotoPictureContainer.appendChild(addPhotoPictureButton);
  //--------------addevent sur + ajouter photo--------------------
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////
  addPhotoPictureButton.addEventListener("click", () => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + authToken,
      },
    };
    fetch(fetching, options).then((response) => console.log(response.status));
    console.log(data);
    console.log(authToken);
  });
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////

  //------------------ajout texte-------------------------
  const textPhoto = document.createElement("p");
  textPhoto.className = "text-photo";
  textPhoto.innerHTML = "jpg, png : 4mo max";
  addPhotoPictureContainer.appendChild(textPhoto);

  //------------------formulaire 1-------------------------
  const form1 = document.createElement("div");
  form1.className = "form1";
  form1.style.display = "flex";
  form1.style.flexDirection = "column";

  const formNom = document.createElement("form");
  formNom.action = "#";
  formNom.method = "post";
  form1.appendChild(formNom);

  const labelNom = document.createElement("label");
  labelNom.className = "label-nom1";
  labelNom.innerHTML = "Titre";
  labelNom.for = "name";
  form1.appendChild(labelNom);

  const inputNom = document.createElement("input");
  inputNom.className = "input-nom1";
  inputNom.type = "text";
  inputNom.name = "name";
  inputNom.id = "name";
  form1.appendChild(inputNom);

  modale1.appendChild(form1);

  //------------------formulaire 2-------------------------
  const form2 = document.createElement("div");
  form2.className = "form2";
  form2.style.display = "flex";
  form2.style.flexDirection = "column";

  const formNom2 = document.createElement("form");
  formNom2.action = "#";
  formNom2.method = "post";
  form2.appendChild(formNom2);

  const labelNom2 = document.createElement("options");
  labelNom2.className = "label-nom2";
  labelNom2.htmlFor = "options";
  labelNom2.innerHTML = "Catégorie";
  labelNom2.for = "options";
  form2.appendChild(labelNom2);

  //----------------avec menu déroulant---------------------
  const select = document.createElement("select");
  select.className = "select";
  select.id = "options";
  select.name = "options";
  form2.appendChild(select);

  function ajoutOption(selectElement, value, text) {
    let option = document.createElement("option");
    option.value = value;
    option.textContent = text;
    selectElement.appendChild(option);
  }

  fetch("http://localhost:5678/api/categories") //fetch les categoryId
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (i = 0; i < data.length; i++) {
        const choice = data[i].name; //on récup les noms des catégories
        ajoutOption(select, "options[i]", choice); //on créé les choix du menu déroulant
      }
    });
  ajoutOption(select, "option1", ""); // avec un premier choix vide

  modale1.appendChild(form2);

  //------------------bouton valider-------------------------

  ajoutPhoto.innerHTML = "valider";
  ajoutPhoto.style.backgroundColor = "rgb(145, 154, 157)";
  //--------------addevent sur valider--------------------
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////
  ajoutPhoto.addEventListener("click", () => {
    // let options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     authorization: "Bearer " + authToken,
    //   },
    // };
    // fetch(fetching, options).then((response) => console.log(response.status));

    //message erreur si les 2 champs ne sont pas remplis
    if (form1 === "" || form2 === "") {
      let errorBox2 = document.getElementById("errorBox2");
      // if (errorBox2) {
      errorBox2.remove();
    }
    errorBox2 = document.createElement("div"); //crée une div
    errorBox2.className = "error-box2"; //
    errorBox2.id = "errorBox2";
    errorBox2.innerHTML = "Veuillez remplir les 2 champs de saisie";
    const select = document.querySelector(".select");
    select.className = "select";
    select.id = "options";
    select.name = "options";
    form2.appendChild(select);
    select.appendChild(errorBox2);
    modale1.appendChild(form2);
    console.log(errorBox2);
    // }
  });
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////
  //////////////////////////////WIP//////////////////////////////////

  //------------------modif div des formulaires-------------------------
  const modalePhotos = document.querySelector(".modale-photos");
  modalePhotos.style.display = "flex";
  modalePhotos.style.flexDirection = "column";
  modalePhotos.style.alignItems = "center";
  modalePhotos.style.marginTop = "10px";
  modalePhotos.style.marginBottom = "10px";

  //------------------fermeture modale 2-------------------------

  const visibleModale = document.querySelector(".modale-visible");
  const overlay = document.getElementById("overlay");
  const comeBackToIndex = document.getElementById("comeBackToIndex");

  comeBackToIndex.addEventListener("click", function (event) {
    event.preventDefault();
    visibleModale.style.display = "none";
  });

  overlay.addEventListener("click", () => {
    visibleModale.style.display = "none";
    overlay.style.display = "none";
  });
});

//-------------------------------------------
