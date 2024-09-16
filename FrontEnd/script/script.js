const filters = document.getElementById("filters");
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

//---------------------------------------------------------------
//-----------intégration menu de catégories----------------------
//---------------------------------------------------------------
/*-------!!!
async function getCategories() {
  const btnTous = document.createElement("button");
  btnTous.innerText = "Tous";
  filters.appendChild(btnTous);

  const response = await fetch("http://localhost:5678/api/categories");
  const data = await response.json();
  data.forEach((element) => {
    const button = document.createElement("button");
    button.innerText = element.name;
    filters.appendChild(button);
    //console.log(data);
  });
}
getCategories();

async function getImages() {
  const newResponse = await fetch("http://localhost:5678/api/works");
  const newData = await newResponse.json();
  newData.forEach((newElement) => {
    const newElementId = newElement.categoryId;
    console.log(newElementId);
  });
}
getImages();
!!!!---------*/

async function fetchCategoriesAndImages() {
  const [categoriesResponse, imagesResponse] = await Promise.all([
    fetch("http://localhost:5678/api/categories"),
    fetch("http://localhost:5678/api/works"),
  ]);
  const categories = await categoriesResponse.json();
  const images = await imagesResponse.json();
  return { categories, images };
}

function getCategoriesWithImages(categories, images) {
  return categories.map((category) => {
    return {
      ...category,
      images: images.filter((image) => image.categoryId === category.id),
    };
  });
}
fetchCategoriesAndImages().then(({ categories, images }) => {
  const btnTous = document.createElement("button");
  btnTous.innerText = "Tous";
  filters.appendChild(btnTous);
  btnTous.addEventListener("click", () => {
    gallery.innerHTML = "";
    for (i = 0; i < images.length; i++) {
      const nomPhotos = images[i].title;
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figCaption = document.createElement("figcaption");
      img.src = images[i].imageUrl;
      img.alt = "image";
      figure.appendChild(img);
      figure.appendChild(figCaption);
      gallery.appendChild(figure);
      figure.insertAdjacentHTML("beforeend", nomPhotos);
    }
  });
  const categoriesWithImages = getCategoriesWithImages(categories, images);
  console.log(categoriesWithImages); // 3 noms de familles incluant les 11 images
  console.log(categories); //3 noms des familles
  categoriesWithImages.forEach((newElement) => {
    const button = document.createElement("button");
    button.innerText = newElement.name;
    filters.appendChild(button);
    // console.log(newElement);
    const imagesLen = images.length;
    console.log(images);
    button.addEventListener("click", () => {
      for (i = 0; i < imagesLen; i++) {
        if (images[i].categoryId === images[i].categoryId) {
          gallery.innerHTML = "";
          const img = document.createElement("img");
          const figure = document.createElement("figure");
          const figCaption = document.createElement("figcaption");
          img.src = images[i].imageUrl;
          figCaption.innerText = images[i].title;
          figure.appendChild(img);
          figure.appendChild(figCaption);
          gallery.appendChild(figure);
        }
      }
    });
  });
});

//---------------------------------------------------------------
//--------------------------LOGIN--------------------------------
//---------------------------------------------------------------
document.getElementById("btn-login").addEventListener("click", () => {
  window.location.href = "./LogIn/login.html";
});
/*
async function getCategories() {
  const btnTous = document.createElement("button");
  btnTous.innerText = "Tous";
  filters.appendChild(btnTous);
  try {
    const response = await fetch("http://localhost:5678/api/works");
    const data = await response.json();

    //console.log(data.length);
    for (i = 0; i < data.length; i++) {
      const newData = data[i].category.id;
      console.log(newData);

      const n = Object.keys(data);
      console.log(n);
    }*/
/*
    //inutile
    newData.forEach((element) => {
      if (element.categoryId !== 0) {
        const button = document.createElement("button");
        button.innerText = element.category.name;
        filters.appendChild(button);
        button.addEventListener("click", () => {
          const img = document.createElement("img");
          const figure = document.createElement("figure");
          const figCaption = document.createElement("figcaption");
          img.src = element.imageUrl;
          figCaption.innerText = element.title;
          gallery.innerHTML = "";
          figure.appendChild(img);
          figure.appendChild(figCaption);
          gallery.appendChild(figure);
        });
      }
    });
    */
//inutile
//}

//
//
//
//
// const projets = document.getElementById("projets");
// const btnTous = document.getElementById("1");
// const btnObjets = document.getElementById("2");
// const btnAppartements = document.getElementById("3");
// const btnHotelsEtRestaurants = document.getElementById("4");

// async function getObjets() {
//   // création fonction asynchrone pour la démarrer en attendant le retour de la promesse qui retourne le tableau "category"
//   const tri1 = await fetch("http://localhost:5678/api/categories"); // attente de la résolution de la promesse qu(on passe en const "tri1")
//   return await tri1.json(); // on convertit la const "a" en format .json pour être lisible par l'ordi avec await
// }
// getObjets();

// //---------------------------------------------------------------
// //-----------------------TOUS------------------------------------
// //---------------------------------------------------------------

// //ajouter transitions, autres photos, noms
// btnTous.addEventListener("click", () => {
//   gallery.innerHTML = "";
//   fetch("http://localhost:5678/api/works")
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach((works) => {
//         const listPhotos = works.imageUrl;
//         const nomPhotos = works.title;
//         const figure = document.createElement("figure");
//         const img = document.createElement("img");
//         const figCaption = document.createElement("figcaption");
//         img.src = listPhotos;
//         img.alt = "image";
//         figure.appendChild(img);
//         figure.appendChild(figCaption);
//         gallery.appendChild(figure);
//         figure.insertAdjacentHTML("beforeend", nomPhotos);
//       });
//     });
// });
// //---------------------------------------------------------------
// //-----------------------OBJETS----------------------------------
// //---------------------------------------------------------------

// btnObjets.addEventListener("click", (works) => {
//   async function afficherObjets() {
//     const arrayObjets = await getObjets();
//     const figure = document.createElement("figure");
//     const img = document.createElement("img");
//     const figCaption = document.createElement("figcaption");
//     fetch("http://localhost:5678/api/works").then((response) => response.json);
//     figCaption.textContent = works.name;
//     gallery.innerHTML = "";
//     figure.classList.add("img");
//     img.src = "http://localhost:5678/images/abajour-tahina1651286843956.png";
//     figure.appendChild(img);
//     figure.appendChild(figCaption);
//     gallery.appendChild(figure);
//     //console.log(arrayObjets);
//   }
//   afficherObjets();
// });
// //---------------------------------------------------------------
// //-----------------------APPARTEMENTS----------------------------
// //---------------------------------------------------------------

// btnAppartements.addEventListener("click", (works) => {
//   async function afficherAppartements() {
//     const arrayObjets = await getObjets();
//     const figure = document.createElement("figure");
//     const img = document.createElement("img");
//     const figCaption = document.createElement("figcaption");
//     fetch("http://localhost:5678/api/works").then((response) => response.json);
//     figCaption.textContent = works.name;
//     gallery.innerHTML = "";
//     figure.classList.add("img");
//     img.src =
//       "http://localhost:5678/images/appartement-paris-v1651287270508.png";
//     figure.appendChild(img);
//     figure.appendChild(figCaption);
//     gallery.appendChild(figure);
//     // console.log(arrayObjets);
//   }
//   afficherAppartements();
// });
// //---------------------------------------------------------------
// //-----------------------HOTELS ET RESTAURANTS-------------------
// //---------------------------------------------------------------

// btnHotelsEtRestaurants.addEventListener("click", (works) => {
//   async function afficherHotelsEtRestaurants() {
//     const arrayObjets = await getObjets();
//     const figure = document.createElement("figure");
//     const img = document.createElement("img");
//     const figCaption = document.createElement("figcaption");
//     fetch("http://localhost:5678/api/works").then((response) => response.json);
//     figCaption.textContent = works.name;
//     gallery.innerHTML = "";
//     figure.classList.add("img");
//     img.src =
//       "http://localhost:5678/images/restaurant-sushisen-londres1651287319271.png";
//     figure.appendChild(img);
//     figure.appendChild(figCaption);
//     gallery.appendChild(figure);
//     //console.log(arrayObjets);
//   }
//   afficherHotelsEtRestaurants();
// });
//
//
//
//
//
//
//
//
//
//DON'T REMOVE BELLOWWWWWWWWWWWWWWWWWWWWWWWW
//
//
/*
let categories = []; // création d'un tableau vide qui se remplira dynamiquement

async function getCategories() {
  const btnTous = document.createElement("button");
  btnTous.innerText = "Tous";
  filters.appendChild(btnTous);
  try {
    const response = await fetch("http://localhost:5678/api/categories");
    const data = await response.json();
    data.forEach((element) => {
      const button = document.createElement("button");
      button.innerText = element.name;
      filters.appendChild(button);
      button.addEventListener("click", () => {
        console.log(response);
      });
    });
  } catch {}
}
getCategories();
*/
