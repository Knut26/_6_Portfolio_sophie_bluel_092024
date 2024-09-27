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

  const backArrow = document.createElement("p"); //flèche de back
  backArrow.innerHTML = '<i class="fa-solid fa-arrow-left back-arrow"></i>';
  modale1.appendChild(backArrow);

  const modaleWrapper = document.querySelector(".modale-wrapper"); //changement titre
  modaleWrapper.innerHTML = "Ajout photo";

  const addPhotoPictureContainer = document.createElement("div"); //div container
  addPhotoPictureContainer.className = "add-photo-picture-container";
  modale1.appendChild(addPhotoPictureContainer);

  const addPhotoPicture = document.createElement("p"); //fopnt awesome photo
  addPhotoPicture.innerHTML =
    '<i class="fa-regular fa-image add-photo-picture"></i>';
  addPhotoPictureContainer.appendChild(addPhotoPicture);

  const addPhotoPictureButton = document.createElement("button"); //ajout button
  addPhotoPictureButton.className = "add-photo-picture-button";
  addPhotoPictureButton.innerHTML = "+ Ajouter photo";
  addPhotoPictureContainer.appendChild(addPhotoPictureButton);

  const textPhoto = document.createElement("p");
  textPhoto.className = "text-photo";
  textPhoto.innerHTML = "jpg, png : 4mo max";
  addPhotoPictureContainer.appendChild(textPhoto);
});
