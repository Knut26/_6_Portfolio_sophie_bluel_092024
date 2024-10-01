// const openModal = function (e) {
//   e.preventDefault();
//   const target = document.querySelector(e.target.getAttribute("href"));
//   target.style.display = null;
//   target.removeAttribute("aria-hidden");
//   target.setAttribute("aria-modal", "true");
// };

// const linkModale = document.getElementById("link-modale");

// linkModale.forEach((a) => {
//   a.addEventListener("click", openModal);
//   //création div test
//   const test = document.createElement("div");
//   test.className("test");
//   test.innerHTML = "ceci est un test";
//   linkModale.appendChild(test);
//   //création div test
// });

//
//---------------------------------------------------------------
//----------------------intégration modale1----------------------
//---------------------------------------------------------------
//
//
const modale1 = document.querySelector(".modale-photos");

function fetchingModale1() {
  fetch("http://localhost:5678/api/works") //fetch les 11 images
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (i = 0; i < data.length; i++) {
        const photoContainer = document.createElement("div"); //div qui contient photo et trashcan
        photoContainer.className = "photo-container"; //nom de la div

        const img = document.createElement("img"); //création d'images
        img.className = "modale-img";
        //img.id = "fetched-img";

        const imageUrl = data[i].imageUrl; // url
        img.src = imageUrl;

        const trashCan = document.createElement("p"); // création de la trashcan
        trashCan.innerHTML = '<i class="fa-solid fa-trash-can trash"></i>';
        trashCan.id = "trash-can";

        photoContainer.appendChild(img);
        photoContainer.appendChild(trashCan);
        modale1.appendChild(photoContainer);
      }
    })

    .catch((error) => console.error(error));
}
fetchingModale1();
//
//---------------------------------------------------------------
//----------------------intégration modale2----------------------
//---------------------------------------------------------------
//
//

const ajoutPhoto = document.getElementById("ajout-photo");

ajoutPhoto.addEventListener("click", function (event) {
  //addevent au clic "ajouter une photo"
  event.preventDefault();
  modale1.innerHTML = ""; //on vide la modale1

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
  addPhotoPictureButton.addEventListener("click", () => {});
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
