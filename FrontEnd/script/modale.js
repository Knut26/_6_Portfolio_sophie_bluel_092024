//
//
//--------------------------------------------------
//---------intégration modale1----------------------
//--------------------------------------------------
//
//

const modale1 = document.querySelector(".modale-photos");
const authToken = sessionStorage.authToken;
// const fetching = fetch("http://localhost:5678/api/works");

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

        const trashCan = document.createElement("p"); //
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

        // function deleteImg() {
        //   //const allTrashCans = document.querySelectorAll(".fa-trash-can");
        //   //console.log(allTrashCans);
        //   //console.log("id poubelle :", trashCanId);
        // }
        trashCan.addEventListener("click", (e) => {
          e.preventDefault(); // Prevent default page refresh
          const initialize = {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authorization: "bearer " + authToken,
            },
          };
          console.log("Token valid:", authToken);
          fetch("http://localhost:5678/api/works/" + trashCanId, initialize)
            .then((response) => {
              if (response.status === 204) {
                console.log("Delete successful, no content returned");
                // You can remove the deleted element from the DOM here
                const photoContainer = e.target.closest(".photo-container");
                if (photoContainer) {
                  photoContainer.remove(); // Remove the photo container from the DOM
                }
              } else if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
            })
            .catch((error) => {
              console.error("Error during deletion:", error); // Log any errors
            });
        });

        photoContainer.appendChild(img);
        photoContainer.appendChild(trashCan);
        modale1.appendChild(photoContainer);
        //deleteImg();
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

fetch("http://localhost:5678/api/categories") //fetch les categoryId
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);
    ajoutOption(select, "");

    for (i = 0; i < data.length; i++) {
      const choice = data[i].name; //on récup les noms des catégories
      ajoutOption(select, data[i].id, choice);
      //console.log(choice);
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

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  // const formData = new FormData(form);
  // formData.append("image", uploadedFile);
  // formData.append("title", newTitle.value);
  // formData.append("category", newCategory.value);
  // const data = Object.fromEntries(formData);
  // console.log(data);
  try {
    const response = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        Authorization: "bearer " + authToken,
      },
      body: JSON.stringify({
        id: 0,
        title: newTitle.value,
        imageUrl: uploadedFile,
        categoryId: newCategory.value,
        userId: 0,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Success: data", data);
    fetchingModale1();
  } catch (error) {
    console.error(error);
  }
});
/*

//formData est un objet intégré en JS qui permet d'envoyer des données de formulaire via des requêtes HTTP notamment avec "fetch", il permet de contruire un ensemble de paire "clef/valeur" représentant les champs du formulaire et leurs valeurs respectives.
/*
const form = document.getElementById("form");
form.addEventListener("click", (event) => {
  event.preventDefault();
  if (uploadedFile) {
    const formData = new FormData(form);
    formData.append("file", uploadedFile);
    fetch("http://localhost:5678/api/works/", {
      method: "POST",
      headers: {
        authorization: "bearer " + authToken,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("fichier téléchargé avec succès");
      })
      .catch((error) => {
        console.error("erreur lors du téléchargement");
      });
  } else {
    console.log("aucun fichier sélectionné");
    let errorBox3 = document.getElementById("errorBox3");
    if (errorBox3) {
      errorBox3.remove();
    }
    errorBox3 = document.createElement("div");
    errorBox3.className = "error-box3";
    errorBox3.id = "errorBox3";
    errorBox3.innerHTML = "Erreur dans le titre ou la catégorie";
    const form = document.querySelector(".form");
    form.style.color = "red";
    const form1 = document.querySelector(".form1");
    form1.appendChild(errorBox3);
  }
});
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

// const formEl = document.querySelector(".form1");

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new formData(formEl);
//   console.log(formData.get("name"));
// });

// const form = document.querySelector(".modale2 form");
// const title = document.querySelector(".modale2 #title");
// const category = document.querySelector(".modale2 .label-nom2");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const formData = {
//     //id: id.value,
//     title: title.value,
//     categoryId: category.value,
//     imageUrl: previewImg.src,
//     //userId: userId.value,
//     category: {
//       id: category.value,
//       name: category.options[category.selectedIndex].textContent,
//     },
//   };
//   fetch("http://localhost:5678/api/works"),
//     {
//       method: "POST",
//       body: JSON.stringify(formData),
//       headers: {
//         "Content-Type": "application/json",
//         authorization: "bearer " + authToken,
//       },
//     }
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         fetchingModale1();
//       });
// });

// const formEl = document.querySelector(".F1");

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new formData(formEl);
//   console.log(formData.get("name"));
// });
/*
const submitButton = document.getElementById("submit-button");
let uploadedFile;

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (uploadedFile && form1 !== "" && form2 !== "") {
    const formData = {
      title: title.value,
      categoryId: category.value,
      imageUrl: previewImg.src,
      category: {
        id: category.value,
        name: category.options[category.selectedIndex].textContent,
      },
    };
    // const formData = new formData();
    // formData.append("file", uploadedFile);

    fetch("http://localhost:5678/api/works", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        authorization: "bearer " + authToken,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  } else {
    let errorBox3 = document.getElementById("errorBox3");
    if (errorBox3) {
      errorBox3.remove();
    }
    errorBox3 = document.createElement("div");
    errorBox3.className = "error-box3";
    errorBox3.id = "errorBox3";
    errorBox3.innerHTML = "Erreur dans le titre ou la catégorie";
    const form = document.querySelector(".form");
    form.style.color = "red";
    const form2 = document.querySelector(".form2");
    form2.appendChild(errorBox3);
  }
});
function formulaire () {
//   if (inputTitle.value && photo.files[0] && category.value) {
//     btn.style.backgroundColor = "#1D6154";
//     } else {
//         btn.style.backgroundColor = "";
//     }
// }
---
---
---

const btn = document.getElementById("submit-button");
const inputTitle = document.getElementById("input-title");
const category = document.getElementById("options");
const photo = document.getElementById("file-upload");

btn.addEventListener("click", async function (event) {
  event.preventDefault();
  if (!inputTitle.value || !uploadedFile || !photo.value) {
    prompt("erreur dans le remplissage des données");
    return;
  }
  const catId = category.value;

  const formData = new FormData();
  formData.append("title", inputTitle.value);
  formData.append("category", catId);
  formData.append("image", uploadedFile);

  try {
    const res = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      },
      body: formData,
    });
    if (res.ok) {
      alert("Import ok");
      const data = await res.json();
      fetchingModale1();
    } else {
      console.log("erreur pendant le post");
    }
  } catch (error) {
    console.error(error);
  }
});
*/
