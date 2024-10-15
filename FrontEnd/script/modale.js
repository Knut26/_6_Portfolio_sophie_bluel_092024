//
//
//--------------------------------------------------
//---------intégration modale1----------------------
//--------------------------------------------------
//
//

const modale1 = document.querySelector(".modale-photos");
const authToken = sessionStorage.authToken;

function fetchingModale1() {
  console.log("fetchingModale1 called");
  fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((data) => {
      console.log("data ok : ", data);
      for (i = 0; i < data.length; i++) {
        const photoContainer = document.createElement("div");
        photoContainer.className = "photo-container";

        const img = document.createElement("img");
        img.className = "modale-img";
        const imageUrl = data[i].imageUrl;
        img.src = imageUrl;

        const trashCan = document.createElement("p");
        trashCan.innerHTML = '<i class="fa-solid fa-trash-can trash"></i>';
        trashCan.className = "trash-can";
        trashCan.id = data[i].id;
        const trashCanId = trashCan.id;

        //
        //
        //--------------------------------------------
        //-----------modale1 : DELETE-----------------
        //--------------------------------------------
        //
        //

        trashCan.addEventListener("click", (e) => {
          e.preventDefault();
          const initialize = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authorization: "bearer " + authToken,
            },
          };
          console.log("Token valid : ", authToken);
          fetch("http://localhost:5678/api/works/" + trashCanId, initialize)
            .then((response) => {
              if (response.status === 204) {
                console.log("Delete successful, no content returned");

                const photoContainer = e.target.closest(".photo-container");
                if (photoContainer) {
                  photoContainer.remove();
                }
              } else if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
            })
            .catch((error) => {
              console.error("Error during deletion:", error);
            });
        });

        photoContainer.appendChild(img);
        photoContainer.appendChild(trashCan);
        modale1.appendChild(photoContainer);
      }
    });
}

//
//
//-----------------------------------------------------
//------------intégration modale2----------------------
//-----------------------------------------------------
//
//

fetchingModale1();

const ajoutPhoto = document.getElementById("ajout-photo");
const modale2 = document.getElementById("modale2");

ajoutPhoto.addEventListener("click", () => {
  modale2.style.display = "flex";
});

const backArrow = document.querySelector(".fa-arrow-left");

backArrow.addEventListener("click", () => {
  modale2.style.display = "none";
});

function ajoutOption(selectElement, value, text) {
  let option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  selectElement.appendChild(option);
}

const select = document.getElementById("options");
const form2 = document.querySelector(".form2");

fetch("http://localhost:5678/api/categories")
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);
    ajoutOption(select, "");

    for (i = 0; i < data.length; i++) {
      const choice = data[i].name;
      ajoutOption(select, data[i].id, choice);
    }
  });

//
//-----------------------------------------------------
//------------fermeture modale 2-----------------------
//-----------------------------------------------------
//
//

const visibleModale = document.querySelector(".modale-visible");
const overlay = document.getElementById("overlay");
const comeBackToIndex = document.getElementById("comeBackToIndex");

comeBackToIndex.addEventListener("click", () => {
  visibleModale.style.display = "none";
  modale2.style.display = "none";
});

overlay.addEventListener("click", () => {
  visibleModale.style.display = "none";
  modale2.style.display = "none";
  overlay.style.display = "none";
});

//
//
//------------------------------------------------
//-----------pré-upload image modale2-------------
//------------------------------------------------
//

const previewImg = document.querySelector(".add-photo-picture-container img");
const inputFile = document.querySelector(".file-input");
const labelFile = document.querySelector(".add-photo-picture-button");
const iconeFile = document.querySelector(".add-photo-picture");
const pFile = document.querySelector(".text-photo");
let uploadedFile;

inputFile.addEventListener("change", (event) => {
  event.preventDefault();
  const file = inputFile.files[0];
  console.log(file);
  const reader = new FileReader();
  reader.onload = function (e) {
    uploadedFile = e.target.result.split(",")[1];
    previewImg.src = e.target.result;
    previewImg.style.display = "flex";
    labelFile.style.display = "none";
    iconeFile.style.display = "none";
    pFile.style.display = "none";
    console.log(reader);
  };
  if (file) {
    reader.readAsDataURL(file);
  }
});

//A l'évènement "change" la fn récupèrele fichier sélectionné en utilisant la propriété "files[0]" de l'élément inputFile.

//La propriété "files" est un array des fichiers sélectionnés, nous utiliserons le 1er donc [0].

//Si "file" est !== de null, création d'un instance FileReader qui est un objet intégré dans JS pour lire le contenu des fichiers.

//On définit la fn "onload" de l'objet FileReader, elle sera appelée
//lorsque la lecture du fichier sera achevée.

//On utilise la propriété "target.result" de l'objet "Event" pour obtenir l'URL du fichier en tant que chaîne de caractères, elle peut être utilisée pour afficher l'image.

//MàJ des !== styles CSS

//Appel de la méthode "readAsDataURL" de l'objet "FilerReader" en lui passant le fichier sélectionné en tant que paramètre. Cela déclenche la lecture du fichier et l'appel de la fn "onload" quand la lecture est achevée.

//
//
//------------------------------------------------
//-------------post image modale2-----------------
//------------------------------------------------
//
const form = document.querySelector(".form-modale2");
const newTitle = document.querySelector(".new-title");
const newCategory = document.querySelector(".new-category");
const inputImage = document.querySelector(".file-input");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append("image", inputImage.files[0]);
  formData.append("title", newTitle.value);
  formData.append("category", newCategory.value);
  // Debugging: Checker le contenu de formData avant envoi
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  try {
    const response = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        Authorization: "bearer " + authToken,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    fetchingModale1(); // Refresh la modale avec la nouvelle image
  } catch (error) {
    console.error(error);
  }
});

//formData est un objet intégré en JS qui permet d'envoyer des données de formulaire via des requêtes HTTP notamment avec "fetch", il permet de contruire un ensemble de paire "clef/valeur" représentant les champs du formulaire et leurs valeurs respectives.
