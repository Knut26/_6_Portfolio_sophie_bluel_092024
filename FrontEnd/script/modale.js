//
//
//--------------------------------------------------
//---------intégration modale1----------------------
//--------------------------------------------------
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

        //-----------MODALE1 : DELETE-----------------

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
    console.log(data);
    for (i = 0; i < data.length; i++) {
      const choice = data[i].name; //on récup les noms des catégories
      ajoutOption(select, "options[i]", choice); //on créé les choix du menu déroulant
    }
  });
ajoutOption(select, "option1", "");

//---------fermeture modale 2------------------

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

//-------------------------------------------
