const gallery = document.querySelector(".gallery");

fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((works) => {
      const listPhotos = works.imageUrl;
      const nomPhotos = works.title;
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figCaption = document.createElement("figcaption");
      img.src = listPhotos;
      img.alt = "image";
      figure.appendChild(img);
      figure.appendChild(figCaption);
      gallery.appendChild(figure);
      figure.insertAdjacentHTML("beforeend", nomPhotos);
    });
  });
//console.log(work.imageUrl);
//console.log(data);
//console.table(work.category.name);
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//intégration menu de catégories
const projets = document.getElementById("projets");
const btnTous = document.getElementById("1");
const btnObjets = document.getElementById("2");
const btnAppartements = document.getElementById("3");
const btnHotelsEtAppartements = document.getElementById("4");

async function getObjets() {
  // création fonction asynchrone pour la démarrer en attendant le retour de la promesse qui retourne le tableau "category"
  const tri1 = await fetch("http://localhost:5678/api/categories"); // attente de la résolution de la promesse qu(on passe en const "tri1")
  return await tri1.json(); // on convertit la const "a" en format .json pour être lisible par l'ordi avec await
}
getObjets();

btnObjets.addEventListener("click", (works) => {
  async function afficherObjet() {
    const arrayObjets = await getObjets();
    console.log(arrayObjets); //OK
    for (i = 0; i < works.lenght; i++) {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figCaption = document.createElement("figcaption");
      fetch("http://localhost:5678/api/works").then(
        (response) => response.json
      );
      figCaption.textContent = works.name;
      gallery.innerHTML = "";
      figure.classList.add("img");
      img.src = "http://localhost:5678/images/" + i + ".png";
      figure.appendChild(img);
      figure.appendChild(figCaption);
      gallery.appendChild(figure);
      console.log(figure);
    }
  }
  afficherObjet();
});

/*
btnObjets.addEventListener("click", () => {
  async function afficherObjets() {
    const arrayObjets = await getObjets();
    console.log(arrayObjets); //OK
    arrayObjets.forEach((works) => {
      const listPhotos = works.imageUrl;
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figCaption = document.createElement("figcaption");
      fetch("http://localhost:5678/api/works").then(
        (response) => response.json
      );
      console.log(works);
      //img.src = listPhotos; // utile ?
      figCaption.textContent = works.id;
      //
      //code ci-dessous pas bon
      //
      gallery.innerHTML = "";
      figure.classList.add("img");
      img.src = "http://localhost:5678/images/abajour-tahina1651286843956.png";
      //
      //code ci-dessus pas bon
      //il faut un appel dynamique de l'image en fn du nom objet/restau/hôtel....
      // genre if(category.name="objets") {img.src = (category.name`${works.category.imageUrl}`)}
      // genre if(category.name="restaurants") {img.src = (category.name`${works.category.imageUrl}`)}
      // genre if(category.name="hotels) {img.src = (category.name`${works.category.imageUrl}`)}
      //
      //
      figure.appendChild(img);
      figure.appendChild(figCaption);
      gallery.appendChild(figure);
      console.log(figure);
      //console.log(img);
      //console.log(figCaption);
    });
  }
  afficherObjets();
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
//
//
//
//
//
//
//
/*
btnObjets.addEventListener("click", () => {
  const arrayObjets = getObjets();
  for (i = 0; i < arrayObjets.lenght; i++) {
    afficherObjets(i);
  }
});

// btnObjets.addEventListener("click", () => {
//   fetch("http://localhost:5678/api/categories")
//     .then((response) => response.json)
//     .then((data) => {
//       const gallery = document.querySelector(".gallery");
//       data.forEach((category) => {
//         const listObjets = category.imageUrl;
//         const nomPhotos = category.name;
//         const figure = document.createElement("figure");
//         const img = document.createElement("img");
//         const figCaption = document.createElement("figcaption");
//         img.src = listPhotos;
//         img.alt = "image";
//         figure.appendChild(listObjets);
//         figure.appendChild(img);
//         figure.appendChild(figCaption);
//         gallery.appendChild(figure);
//         figure.insertAdjacentHTML("beforeend", nomPhotos);
//       });
//     });

//   btnObjets.addEventListener("click", () => {
//     const nomCategorieRecherche = "objets";
//     const objetsFiltres = work.category.name.filter(
//       (objet) => work.category.name === nomCategorieRecherche
//     );
//     objetsFiltres.forEach((objet) => {
//       console.log(`id: ${objet.id}`);
//  });

//console.log(work.category.name);
//   objets.addEventListener("click", () => {
//     const projetsObjets = work.category;
//     gallery.innerHTML = projetsObjets;
//     console.log(work.category.name);
//   });
//console.log(work.category.name);
//   });
//   })
// .catch((error) => console.error(error));
/*

//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
// tentative de bouton de tri

//   function filterImages() {
//     for (i = 0; i < work.category.name; i++) {
//       const imagesContainer = document.querySelector(".gallery");
//       imagesContainer.innerHTML = ""; // vide le container des images
//       imagesContainer.forEach((image) => {
//         if (image.gallery.category.name === "objets") {
//           const imagesElements = document.createElement("img");
//           imagesElements.src = work.category.imageUrl;
//           imagesElements.alt = `work.category.name${filterImages}`;
//           imagesElements.classList.add("image-container");
//           imagesElements.style.display = "Block";
//           imagesContainer.appendChild(imagesElements);
//         }
//       });
//     }
//     filterImages(i);
//   }
//identifier les images pour accéder aux !==tes catégories

/*
menuDeCategories.addEventListener("click", () => {
  const tri = Array.from(work.category.name);
  return work.category.name;
  console.log(tri);
});

*/
