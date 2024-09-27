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

fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (i = 0; i < data.length; i++) {
      const photoContainer = document.createElement("div"); //div qui contient photo et trashcan
      photoContainer.className = "photo-container";

      const img = document.createElement("img");
      img.className = "modale-img";

      const imageUrl = data[i].imageUrl;
      img.src = imageUrl;

      const trashCan = document.createElement("p");
      trashCan.innerHTML = '<i class="fa-solid fa-trash-can trash"></i>';
      trashCan.className = "trash-can";

      photoContainer.appendChild(img);
      photoContainer.appendChild(trashCan);
      modale1.appendChild(photoContainer);
    }
  })

  .catch((error) => console.error(error));

//
//---------------------------------------------------------------
//----------------------intégration modale2----------------------
//---------------------------------------------------------------
//
//

const ajoutPhoto = document.getElementById("ajout-photo");

ajoutPhoto.addEventListener("click", function (event) {
  event.preventDefault();
  modale1.innerHTML = "";

  //------------------flèche back-------------------------
  const backArrow = document.createElement("p");
  backArrow.innerHTML = '<i class="fa-solid fa-arrow-left back-arrow"></i>';
  modale1.appendChild(backArrow);

  //------------------croix fermeture modale-------------------------
  const close = document.createElement("p");
  close.innerHTML = '<i class="fas fa-regular fa-xmark"></i>';
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
  addPhotoPicture.innerHTML =
    '<i class="fa-regular fa-image add-photo-picture"></i>';
  addPhotoPictureContainer.appendChild(addPhotoPicture);

  //------------------ajout button-------------------------
  const addPhotoPictureButton = document.createElement("button");
  addPhotoPictureButton.className = "add-photo-picture-button";
  addPhotoPictureButton.innerHTML = "+ Ajouter photo";
  addPhotoPictureContainer.appendChild(addPhotoPictureButton);

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

  //   const inputNom2 = document.createElement("select");
  //   inputNom2.className = "input-nom2";
  //   inputNom2.type = "text";
  //   inputNom2.name = "options";
  //   inputNom2.id = "options";
  //   form2.appendChild(inputNom2);

  //------------------formulaire déroulant-------------------------
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
  ajoutOption(select, "option1", "");
  ajoutOption(select, "option2", "1");
  ajoutOption(select, "option3", "2");
  ajoutOption(select, "option4", "3");
  ajoutOption(select, "option5", "4");

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
});
